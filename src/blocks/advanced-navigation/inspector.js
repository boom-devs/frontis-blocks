import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { 
    PanelBody, 
    SelectControl, 
    ToggleControl,
    TabPanel
} from '@wordpress/components';

import {useDeviceType} from "@Config/displayType";
import FB_InspectorControls from '@Components/InspectorControls';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const {
        blockId,
        layout,
        navAlign,
        dropdownOpenOnClick,
        showDropdownIcon,
        navBtnType,
        flexWrap,
        navVerticalAlign,
        hamburgerMenu,
        hamburgerCloseIconAlign,
    } = attributes;

    const deviceType= useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-advanced-navigation-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
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
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>
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
        </>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
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
		</>
	);

    return (

        <>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>

    );
}