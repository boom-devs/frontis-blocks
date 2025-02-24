import { useState, useEffect } from '@wordpress/element';
import FB_SidebarTypography from '../sidebar/components/SidebarTypography';

const TypographyPanel = () => {
  const [expandedSection, setExpandedSection] = useState('system');
  const [isTypographyOpen, setIsTypographyOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTypographyItem, setActiveTypographyItem] = useState(null);

  // Default typography state values
  // Create separate typography states for each element
  const [typographyStates, setTypographyStates] = useState({
    Text: {
      fontFamily: '',
      fontSize: '',
      fontSizeUnit: 'px',
      fontSizeUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' }
      ],
      fontWeight: '',
      fontStyle: '',
      textTransform: '',
      textDecoration: '',
      letterSpacing: '',
      letterSpacingUnit: 'px',
      letterSpacingUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      lineHeight: '',
      lineHeightUnit: 'px',
      lineHeightUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      deviceType: 'desktop'
    },
    Link: {
      fontFamily: '',
      fontSize: '',
      fontSizeUnit: 'px',
      fontSizeUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' }
      ],
      fontWeight: '',
      fontStyle: '',
      textTransform: '',
      textDecoration: '',
      letterSpacing: '',
      letterSpacingUnit: 'px',
      letterSpacingUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      lineHeight: '',
      lineHeightUnit: 'px',
      lineHeightUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      deviceType: 'desktop'
    },
    Button: {
      fontFamily: '',
      fontSize: '',
      fontSizeUnit: 'px',
      fontSizeUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' }
      ],
      fontWeight: '',
      fontStyle: '',
      textTransform: '',
      textDecoration: '',
      letterSpacing: '',
      letterSpacingUnit: 'px',
      letterSpacingUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      lineHeight: '',
      lineHeightUnit: 'px',
      lineHeightUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      deviceType: 'desktop'
    },
    H1: {
      fontFamily: '',
      fontSize: '',
      fontSizeUnit: 'px',
      fontSizeUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' }
      ],
      fontWeight: '',
      fontStyle: '',
      textTransform: '',
      textDecoration: '',
      letterSpacing: '',
      letterSpacingUnit: 'px',
      letterSpacingUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      lineHeight: '',
      lineHeightUnit: 'px',
      lineHeightUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      deviceType: 'desktop'
    },
    H2: {
      fontFamily: '',
      fontSize: '',
      fontSizeUnit: 'px',
      fontSizeUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' }
      ],
      fontWeight: '',
      fontStyle: '',
      textTransform: '',
      textDecoration: '',
      letterSpacing: '',
      letterSpacingUnit: 'px',
      letterSpacingUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      lineHeight: '',
      lineHeightUnit: 'px',
      lineHeightUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      deviceType: 'desktop'
    },
    H3: {
      fontFamily: '',
      fontSize: '',
      fontSizeUnit: 'px',
      fontSizeUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' }
      ],
      fontWeight: '',
      fontStyle: '',
      textTransform: '',
      textDecoration: '',
      letterSpacing: '',
      letterSpacingUnit: 'px',
      letterSpacingUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      lineHeight: '',
      lineHeightUnit: 'px',
      lineHeightUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      deviceType: 'desktop'
    },
    H4: {
      fontFamily: '',
      fontSize: '',
      fontSizeUnit: 'px',
      fontSizeUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' }
      ],
      fontWeight: '',
      fontStyle: '',
      textTransform: '',
      textDecoration: '',
      letterSpacing: '',
      letterSpacingUnit: 'px',
      letterSpacingUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      lineHeight: '',
      lineHeightUnit: 'px',
      lineHeightUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      deviceType: 'desktop'
    },
    H5: {
      fontFamily: '',
      fontSize: '',
      fontSizeUnit: 'px',
      fontSizeUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' }
      ],
      fontWeight: '',
      fontStyle: '',
      textTransform: '',
      textDecoration: '',
      letterSpacing: '',
      letterSpacingUnit: 'px',
      letterSpacingUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      lineHeight: '',
      lineHeightUnit: 'px',
      lineHeightUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      deviceType: 'desktop'
    },
    H6: {
      fontFamily: '',
      fontSize: '',
      fontSizeUnit: 'px',
      fontSizeUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: 'rem', value: 'rem' }
      ],
      fontWeight: '',
      fontStyle: '',
      textTransform: '',
      textDecoration: '',
      letterSpacing: '',
      letterSpacingUnit: 'px',
      letterSpacingUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      lineHeight: '',
      lineHeightUnit: 'px',
      lineHeightUnits: [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' }
      ],
      deviceType: 'desktop'
    }
  });

  const handleSectionClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  useEffect(() => {
    const loadSavedSettings = async () => {
      try {
        const response = await wp.apiFetch({
          path: '/wp/v2/settings'
        });

        // Load settings for each element type
        ['Text', 'Link', 'Button', ...headings].forEach(elementType => {
          const savedSettings = response[`fb_typography_${elementType.toLowerCase()}`];
          if (savedSettings) {
            const parsedSettings = JSON.parse(savedSettings);
            applyTypographyStyles(elementType, parsedSettings);
          }
        });
      } catch (error) {
        console.error('Error loading typography settings:', error);
      }
    };

    loadSavedSettings();
  }, []);

  const generateTypographyCSS = (element, styles) => {
    return `
      ${element} {
        ${styles.fontFamily ? `font-family: ${styles.fontFamily};` : ''}
        ${styles.fontSize ? `font-size: ${styles.fontSize}${styles.fontSizeUnit};` : ''}
        ${styles.fontWeight ? `font-weight: ${styles.fontWeight};` : ''}
        ${styles.fontStyle ? `font-style: ${styles.fontStyle};` : ''}
        ${styles.textTransform ? `text-transform: ${styles.textTransform};` : ''}
        ${styles.textDecoration ? `text-decoration: ${styles.textDecoration};` : ''}
        ${styles.letterSpacing ? `letter-spacing: ${styles.letterSpacing}${styles.letterSpacingUnit};` : ''}
        ${styles.lineHeight ? `line-height: ${styles.lineHeight}${styles.lineHeightUnit};` : ''}
      }
    `;
  };

  const applyTypographyStyles = (elementType, styles) => {
    let selector;

    // Define selectors for different element types
    switch (elementType) {
      case 'Text':
        selector = 'body';
        break;
      case 'Link':
        selector = 'a';
        break;
      case 'Button':
        selector = 'button, .button';
        break;
      case 'H1':
        selector = 'h1';
        break;
      case 'H2':
        selector = 'h2';
        break;
      case 'H3':
        selector = 'h3';
        break;
      case 'H4':
        selector = 'h4';
        break;
      case 'H5':
        selector = 'h5';
        break;
      case 'H6':
        selector = 'h6';
        break;
      default:
        selector = elementType;
    }

    const css = generateTypographyCSS(selector, styles);

    // Create or update style element
    let styleElement = document.getElementById(`fb-typography-${elementType}`);
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = `fb-typography-${elementType}`;
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = css;
  }

  const handleEditClick = (item) => {
    // If the same item is clicked again, close the panel
    if (activeTypographyItem === item && isTypographyOpen) {
      setIsTypographyOpen(false);
      setActiveTypographyItem(null);
    } else {
      // Open panel for the new item
      setIsTypographyOpen(true);
      setActiveTypographyItem(item);
    }
  };

  const handleTypographyChange = (property, value) => {
    if (!activeTypographyItem) return;

    setTypographyStates(prev => ({
      ...prev,
      [activeTypographyItem]: {
        ...prev[activeTypographyItem],
        [property]: value
      }
    }));

    // Save only the active element's typography settings
    saveTypographySettings(activeTypographyItem, {
      ...typographyStates[activeTypographyItem],
      [property]: value
    });
  };

  const saveTypographySettings = async (elementType, settings) => {
    try {
      const response = await wp.apiFetch({
        path: '/wp/v2/settings',
        method: 'POST',
        data: {
          [`fb_typography_${elementType.toLowerCase()}`]: JSON.stringify(settings)
        }
      });

      // Trigger style regeneration
      await wp.apiFetch({
        path: '/wp/v2/settings',
        method: 'POST',
        data: {
          fb_global_styles: true // This will trigger regeneration of styles
        }
      });

      console.log('Typography settings saved:', response);
    } catch (error) {
      console.error('Error saving typography settings:', error);
    }
  };

  const headings = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

  return (
    <div className="fb-fsi-typography-panel">
      {/* Header */}
      <div className="fb-fsi-typography-header">
        <h3>Typography</h3>
      </div>

      {/* System Font Section */}
      <div className="fb-fsi-panel-section">
        <button
          className="fb-fsi-panel-header"
          onClick={() => handleSectionClick('system')}
        >
          <span>System Font</span>
          <span className={`dashicons ${expandedSection === 'system'
            ? 'dashicons-arrow-up-alt2'
            : 'dashicons-arrow-down-alt2'
            }`}></span>
        </button>

        {expandedSection === 'system' && (
          <div className="fb-fsi-panel-content">
            {['Text', 'Link', 'Button'].map((item) => (
              <div key={item} className="fb-font-item">
                <div className="fb-font-preview">Ag</div>
                <div className="fb-font-details">
                  <span>{item}</span>
                  <button
                    className="fb-edit-button dashicons dashicons-edit"
                    onClick={() => handleEditClick(item)}
                  ></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Headings Section */}
      <div className="fb-fsi-panel-section">
        <button
          className="fb-fsi-panel-header"
          onClick={() => handleSectionClick('headings')}
        >
          <span>Headings</span>
          <span className={`dashicons ${expandedSection === 'headings'
            ? 'dashicons-arrow-up-alt2'
            : 'dashicons-arrow-down-alt2'
            }`}></span>
        </button>

        {expandedSection === 'headings' && (
          <div className="fb-fsi-panel-content">
            {headings.map((heading) => (
              <div key={heading} className="fb-font-item">
                <div className="fb-font-preview">Ag</div>
                <div className="fb-font-details">
                  <span>{heading}</span>
                  <button
                    className="fb-edit-button dashicons dashicons-edit"
                    onClick={() => handleEditClick(heading)}
                  ></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Custom Section */}
      <div className="fb-fsi-panel-section">
        <button
          className="fb-fsi-panel-header"
          onClick={() => handleSectionClick('custom')}
        >
          <span>Custom</span>
          <span className={`dashicons ${expandedSection === 'custom'
            ? 'dashicons-arrow-up-alt2'
            : 'dashicons-arrow-down-alt2'
            }`}></span>
        </button>

        {expandedSection === 'custom' && (
          <div className="fb-fsi-panel-content">
            {/* Add custom content here */}
          </div>
        )}
      </div>

      {/* Typography Settings Popup */}
      {isTypographyOpen && activeTypographyItem && (
        <div className='fb-fsi-typography-popup'>
          <FB_SidebarTypography
            {...typographyStates[activeTypographyItem]}
            heading={activeTypographyItem}
            onClose={() => {
              setIsTypographyOpen(false);
              setActiveTypographyItem(null);
            }}
            fontFamily={typographyStates[activeTypographyItem].fontFamily}
            onChangeFontFamily={(value) => handleTypographyChange('fontFamily', value)}
            fontSize={typographyStates[activeTypographyItem].fontSize}
            onChangeFontSize={(value) => handleTypographyChange('fontSize', value)}
            fontSizeUnits={typographyStates[activeTypographyItem].fontSizeUnits}
            onChangeFontSizeUnit={(value) => handleTypographyChange('fontSizeUnit', value)}
            fontWeight={typographyStates[activeTypographyItem].fontWeight}
            onChangeFontWeight={(value) => handleTypographyChange('fontWeight', value)}
            fontStyle={typographyStates[activeTypographyItem].fontStyle}
            onChangeFontStyle={(value) => handleTypographyChange('fontStyle', value)}
            textTransform={typographyStates[activeTypographyItem].textTransform}
            onChangeTextTransform={(value) => handleTypographyChange('textTransform', value)}
            textDecoration={typographyStates[activeTypographyItem].textDecoration}
            onChangeTextDecoration={(value) => handleTypographyChange('textDecoration', value)}
            letterSpacing={typographyStates[activeTypographyItem].letterSpacing}
            onChangeLetterSpacing={(value) => handleTypographyChange('letterSpacing', value)}
            letterSpacingUnits={typographyStates[activeTypographyItem].letterSpacingUnits}
            onChangeLetterSpacingUnit={(value) => handleTypographyChange('letterSpacingUnit', value)}
            lineHeight={typographyStates[activeTypographyItem].lineHeight}
            onChangeLineHeight={(value) => handleTypographyChange('lineHeight', value)}
            lineHeightUnits={typographyStates[activeTypographyItem].lineHeightUnits}
            onChangeLineHeightUnit={(value) => handleTypographyChange('lineHeightUnit', value)}
            deviceType={typographyStates[activeTypographyItem].deviceType}
          />
        </div>
      )}
    </div>
  );
};

export default TypographyPanel;