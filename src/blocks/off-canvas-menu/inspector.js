import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { 
    PanelBody, 
    SelectControl, 
    ToggleControl,
    TabPanel
} from '@wordpress/components';

export default function Inspector({ attributes, setAttributes }) {
    const {
        layout,
        preset,
        verticalPreset,
        navAlign,
        dropdownOpenOnClick,
        showDropdownIcon,
        navBtnType,
        flexWrap,
        navVerticalAlign,
        hamburgerMenu,
        hamburgerCloseIconAlign,

        advancedNavigationDesktopSwitcher,
		advancedNavigationTabletSwitcher,
		advancedNavigationMobileSwitcher,
    } = attributes;

    const generalTab = (
        <PanelBody>
            <SelectControl
                label={__('Layout', 'frontis-blocks')}
                value={layout}
                options={[
                    { label: __('Horizontal', 'frontis-blocks'), value: 'is-horizontal' },
                    { label: __('Vertical', 'frontis-blocks'), value: 'is-vertical' },
                ]}
                onChange={(value) => setAttributes({ layout: value })}
            />
            {/* <SelectControl
                label={__('Preset', 'frontis-blocks')}
                value={layout === 'is-horizontal' ? preset : verticalPreset}
                options={[
                    { label: __('Preset 1', 'frontis-blocks'), value: 'preset-1' },
                    { label: __('Preset 2', 'frontis-blocks'), value: 'preset-2' },
                    { label: __('Preset 3', 'frontis-blocks'), value: 'preset-3' },
                ]}
                onChange={(value) => setAttributes({ [layout === 'is-horizontal' ? 'preset' : 'verticalPreset']: value })}
            /> */}
            <SelectControl
                label={__('Alignment', 'frontis-blocks')}
                value={layout === 'is-horizontal' ? navAlign : navVerticalAlign}
                options={[
                    { label: __('Left', 'frontis-blocks'), value: 'items-justified-left' },
                    { label: __('Center', 'frontis-blocks'), value: 'items-justified-center' },
                    { label: __('Right', 'frontis-blocks'), value: 'items-justified-right' },
                ]}
                onChange={(value) => setAttributes({ [layout === 'is-horizontal' ? 'navAlign' : 'navVerticalAlign']: value })}
            />
        </PanelBody>
    );

    const styleTab = (
        <PanelBody>
            <ToggleControl
                label={__('Open dropdown on click', 'frontis-blocks')}
                checked={dropdownOpenOnClick}
                onChange={(value) => setAttributes({ dropdownOpenOnClick: value })}
            />
            <ToggleControl
                label={__('Show dropdown icon', 'frontis-blocks')}
                checked={showDropdownIcon}
                onChange={(value) => setAttributes({ showDropdownIcon: value })}
            />
            <ToggleControl
                label={__('Use icon for navigation button', 'frontis-blocks')}
                checked={navBtnType}
                onChange={(value) => setAttributes({ navBtnType: value })}
            />
            <ToggleControl
                label={__('Enable flex wrap', 'frontis-blocks')}
                checked={flexWrap}
                onChange={(value) => setAttributes({ flexWrap: value })}
            />
        </PanelBody>
    );

    const advancedTab = (
        <PanelBody>
            <SelectControl
                label={__('Hamburger menu', 'frontis-blocks')}
                value={hamburgerMenu}
                options={[
                    { label: __('Mobile', 'frontis-blocks'), value: 'mobile' },
                    { label: __('Tablet', 'frontis-blocks'), value: 'tablet' },
                    { label: __('Desktop', 'frontis-blocks'), value: 'desktop' },
                ]}
                onChange={(value) => setAttributes({ hamburgerMenu: value })}
            />
            <SelectControl
                label={__('Hamburger close icon alignment', 'frontis-blocks')}
                value={hamburgerCloseIconAlign}
                options={[
                    { label: __('Left', 'frontis-blocks'), value: 'close-icon-left' },
                    { label: __('Right', 'frontis-blocks'), value: 'close-icon-right' },
                ]}
                onChange={(value) => setAttributes({ hamburgerCloseIconAlign: value })}
            />
        </PanelBody>
    );

    return (
        <InspectorControls>
            <TabPanel
                className="frontis-advanced-navigation-inspector-tabs"
                activeClass="active-tab"
                tabs={[
                    {
                        name: 'general',
                        title: __('General', 'frontis-blocks'),
                        className: 'frontis-tab general-tab',
                    },
                    {
                        name: 'style',
                        title: __('Style', 'frontis-blocks'),
                        className: 'frontis-tab style-tab',
                    },
                    {
                        name: 'advanced',
                        title: __('Advanced', 'frontis-blocks'),
                        className: 'frontis-tab advanced-tab',
                    },
                ]}
            >
                {(tab) => {
                    switch (tab.name) {
                        case 'general':
                            return generalTab;
                        case 'style':
                            return styleTab;
                        case 'advanced':
                            return advancedTab;
                        default:
                            return null;
                    }
                }}
            </TabPanel>
        </InspectorControls>
    );
}