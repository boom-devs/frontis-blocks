import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';
import { 
  PanelBody, 
  Dropdown, 
  Button, 
  ColorPalette, 
  ColorIndicator, 
  TabPanel,
  GradientPicker,
  __experimentalToolsPanel as ToolsPanel,
  __experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './sidebar.scss';


const FrontisBlocksSidebar = () => {
  const themeColors = useSelect((select) => {
    return select('core/editor').getEditorSettings().colors;
  }, []);

  const [customColors, setCustomColors] = useState([]);
  const [activeTab, setActiveTab] = useState('solid');
    const [ gradient, setGradient ] = useState(null);
    const [ primaryColor, setPrimaryColor ] = useState('#f00');
    const [ secondaryColor, setSecondaryColor ] = useState('#0f0');
    const [ accentColor, setAccentColor ] = useState('#00f');

  console.log(gradient);

  const addCustomColor = () => {
    const newColor = {
      id: `custom-color-${customColors.length + 1}`,
      title: `Custom Color ${customColors.length + 1}`,
      color: '#000000'
    };
    setCustomColors([...customColors, newColor]);
  };

  const updateCustomColor = (id, newColor) => {
    setCustomColors(customColors.map(color => 
      color.id === id ? { ...color, color: newColor } : color
    ));
  };
  const resetAll = () => {
    setPrimaryColor('#f00');
    setSecondaryColor('#0f0');
    setAccentColor('#00f');
    setCustomColors([]);
  };

  return (
    <>
      <PluginSidebarMoreMenuItem target="frontis-blocks-sidebar">
        {__('FB Global Settings', 'frontis-blocks')}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar name="frontis-blocks-sidebar" title={__('FB Global Settings', 'frontis-blocks')}>
        <PanelBody title={__('Color Settings', 'frontis-blocks')}>
          <TabPanel
            className="frontis-blocks-color-tabs"
            activeClass="active-tab"
            onSelect={(tabName) => setActiveTab(tabName)}
            tabs={[
              { name: 'solid', title: 'Solid' },
              { name: 'gradient', title: 'Gradient' },
            ]}
          >
            {(tab) => (
              <div>
                {tab.name === 'solid' && (
                <ToolsPanel
                  label={__('Global Colors', 'frontis-blocks')}
                  resetAll={resetAll}
                >
                  <ToolsPanelItem
                    hasValue={() => true}
                    label={__('Primary Color', 'frontis-blocks')}
                    onDeselect={() => setPrimaryColor('#f00')}
                    isShownByDefault={true}
                  >
                    <ColorDropdown
                      title={__('Primary Color', 'frontis-blocks')}
                      initialColor={primaryColor}
                      onColorChange={(color) => setPrimaryColor(color)}
                      themeColors={themeColors}
                    />
                  </ToolsPanelItem>
                  
                  <ToolsPanelItem
                    hasValue={() => true}
                    label={__('Secondary Color', 'frontis-blocks')}
                    onDeselect={() => setSecondaryColor('#0f0')}
                    isShownByDefault={true}
                  >
                    <ColorDropdown
                      title={__('Secondary Color', 'frontis-blocks')}
                      initialColor={secondaryColor}
                      onColorChange={(color) => setSecondaryColor(color)}
                      themeColors={themeColors}
                    />
                  </ToolsPanelItem>
                  
                  <ToolsPanelItem
                    hasValue={() => true}
                    label={__('Accent Color', 'frontis-blocks')}
                    onDeselect={() => setAccentColor('#00f')}
                    isShownByDefault={true}
                  >
                    <ColorDropdown
                      title={__('Accent Color', 'frontis-blocks')}
                      initialColor={accentColor}
                      onColorChange={(color) => setAccentColor(color)}
                      themeColors={themeColors}
                    />
                  </ToolsPanelItem>
                  
                  {/* Custom Colors */}
                  {customColors?.map(customColor => (
                    <ToolsPanelItem
                      key={customColor.id}
                      hasValue={() => true}
                      label={customColor.title}
                      onDeselect={() => updateCustomColor(customColor.id, '#000000')}
                      isShownByDefault={true}
                    >
                      <ColorDropdown
                        title={customColor.title}
                        initialColor={customColor.color}
                        onColorChange={(color) => updateCustomColor(customColor.id, color)}
                        themeColors={themeColors}
                      />
                    </ToolsPanelItem>
                  ))}
                  
                  <Button
                    isSecondary
                    onClick={addCustomColor}
                    style={{ marginTop: '10px' }}
                  >
                    {__('Add Custom Color', 'frontis-blocks')}
                  </Button>
                </ToolsPanel>
              )}
              {tab.name === 'gradient' && (
                <GradientPicker
                value={ gradient }
                onChange={ ( currentGradient ) => setGradient( currentGradient ) }
                gradients={ [
                    {
                        name: 'JShine',
                        gradient:
                            'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                        slug: 'jshine',
                    },
                    {
                        name: 'Moonlit Asteroid',
                        gradient:
                            'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
                        slug: 'moonlit-asteroid',
                    },
                    {
                        name: 'Rastafarie',
                        gradient:
                            'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
                        slug: 'rastafari',
                    },
                    ] }
                />
              )}
            </div>
            )}
          </TabPanel>
              </PanelBody>
              <PanelBody title={ __('Global Typography', 'frontis-blocks') }>
                  
              </PanelBody>
      </PluginSidebar>
    </>
  );
};

const ColorDropdown = ({ title, initialColor, onColorChange, themeColors }) => {
  const [color, setColor] = useState(initialColor);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <Dropdown
      className="frontis-blocks-color-dropdown"
      contentClassName="frontis-blocks-color-dropdown__content"
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="frontis-blocks-color-dropdown__toggle"
        >
          <ColorIndicator colorValue={color} />
          <span>{title}</span>
        </Button>
      )}
      renderContent={() => (
        <ColorPalette
          colors={[
            {
              name: 'Theme Colors',
              colors: themeColors
            }
          ]}
          value={color}
          onChange={handleColorChange}
        />
      )}
    />
  );
};

registerPlugin('frontis-blocks-sidebar', {
  render: FrontisBlocksSidebar,
  icon: 'block-default',
});
