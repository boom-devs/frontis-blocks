import { useState } from '@wordpress/element';
import FB_SidebarTypography from '../sidebar/components/SidebarTypography';

const TypographyPanel = () => {
  const [expandedSection, setExpandedSection] = useState('system');
  const [isTypographyOpen, setIsTypographyOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTypographyItem, setActiveTypographyItem] = useState(null);

  // Default typography state values
  const [typographyState, setTypographyState] = useState({
    fontFamily: '',
    fontSize: '',
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
    letterSpacingUnits: [
      { label: 'px', value: 'px' },
      { label: 'em', value: 'em' }
    ],
    lineHeight: '',
    lineHeightUnits: [
      { label: 'px', value: 'px' },
      { label: 'em', value: 'em' }
    ],
    deviceType: 'desktop'
  });

  const handleSectionClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
    setTypographyState(prev => ({
      ...prev,
      [property]: value
    }));
  };

  const headings = ['H2', 'H3', 'H4', 'H5', 'H6'];

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
            {...typographyState}
            heading={activeTypographyItem}
            onClose={() => {
              setIsTypographyOpen(false);
              setActiveTypographyItem(null);
            }}
            fontFamily={typographyState.fontFamily}
            onChangeFontFamily={(value) => handleTypographyChange('fontFamily', value)}
            fontSize={typographyState.fontSize}
            onChangeFontSize={(value) => handleTypographyChange('fontSize', value)}
            fontSizeUnits={typographyState.fontSizeUnits}
            onChangeFontSizeUnit={(value) => handleTypographyChange('fontSizeUnit', value)}
            fontWeight={typographyState.fontWeight}
            onChangeFontWeight={(value) => handleTypographyChange('fontWeight', value)}
            fontStyle={typographyState.fontStyle}
            onChangeFontStyle={(value) => handleTypographyChange('fontStyle', value)}
            textTransform={typographyState.textTransform}
            onChangeTextTransform={(value) => handleTypographyChange('textTransform', value)}
            textDecoration={typographyState.textDecoration}
            onChangeTextDecoration={(value) => handleTypographyChange('textDecoration', value)}
            letterSpacing={typographyState.letterSpacing}
            onChangeLetterSpacing={(value) => handleTypographyChange('letterSpacing', value)}
            letterSpacingUnits={typographyState.letterSpacingUnits}
            onChangeLetterSpacingUnit={(value) => handleTypographyChange('letterSpacingUnit', value)}
            lineHeight={typographyState.lineHeight}
            onChangeLineHeight={(value) => handleTypographyChange('lineHeight', value)}
            lineHeightUnits={typographyState.lineHeightUnits}
            onChangeLineHeightUnit={(value) => handleTypographyChange('lineHeightUnit', value)}
            deviceType={typographyState.deviceType}
          />
      </div>
      )}
    </div>
  );
};

export default TypographyPanel;