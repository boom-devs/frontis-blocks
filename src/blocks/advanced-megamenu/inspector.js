import { __ } from '@wordpress/i18n';
import { useEffect, useMemo } from '@wordpress/element';
import { 
    PanelBody, 
    SelectControl, 
    RangeControl,
    ToggleControl,
} from '@wordpress/components';

import FB_InspectorControls from '@Components/InspectorControls';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_Spacing from '@Components/spacing';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_VisibilityControl from '@Components/visibility-control';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        blockStyle,
        navigationGlobalCustomCSS,
        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,
        menuLayout,
        menuAlignment,
        menuSpacing,
        menuItemColor,
        menuItemHoverColor,
        menuItemBackgroundColor,
        menuItemHoverBackgroundColor,
        menuItemPadding,
        submenuWidth,
        submenuBackgroundColor,
        megaMenuWidth,
        megaMenuBackgroundColor,
        megaMenuInteraction
    } = attributes;

    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-advanced-megamenu-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const allBlockStyle = useMemo(() => `
        .${blockId} {
            /* Add your custom styles here */
        }
    `, [
        blockId,
        blockStyle,
    ]);

    const customCss = getCustomCss(navigationGlobalCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({ blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim() });
    }, [allBlockStyle, customCss]);

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

    const generalControls = (
        <>
            <PanelBody title={__("Menu Settings", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Menu Layout", "frontis-blocks")}
                    value={menuLayout}
                    options={[
                        { label: __('Horizontal', 'frontis-blocks'), value: 'horizontal' },
                        { label: __('Vertical', 'frontis-blocks'), value: 'vertical' },
                    ]}
                    onChange={(value) => setAttributes({ menuLayout: value })}
                />

                <SelectControl
                    label={__("Menu Alignment", "frontis-blocks")}
                    value={menuAlignment}
                    options={[
                        { label: __('Left', 'frontis-blocks'), value: 'left' },
                        { label: __('Center', 'frontis-blocks'), value: 'center' },
                        { label: __('Right', 'frontis-blocks'), value: 'right' },
                        { label: __('Space Between', 'frontis-blocks'), value: 'space-between' },
                    ]}
                    onChange={(value) => setAttributes({ menuAlignment: value })}
                />

                <RangeControl
                    label={__("Menu Item Spacing", "frontis-blocks")}
                    value={menuSpacing || 15}
                    onChange={(value) => setAttributes({ menuSpacing: value })}
                    min={0}
                    max={100}
                />
            </PanelBody>

            <PanelBody title={__("Submenu Settings", "frontis-blocks")} initialOpen={false}>
                <RangeControl
                    label={__("Submenu Width (px)", "frontis-blocks")}
                    value={submenuWidth}
                    onChange={(value) => setAttributes({ submenuWidth: value })}
                    min={150}
                    max={400}
                />
            </PanelBody>

            <PanelBody title={__("Mega Menu Settings", "frontis-blocks")} initialOpen={false}>
                <SelectControl
                    label={__("Mega Menu Width", "frontis-blocks")}
                    value={megaMenuWidth}
                    options={[
                        { label: __('Container Width', 'frontis-blocks'), value: 'container' },
                        { label: __('Full Width', 'frontis-blocks'), value: 'full' },
                        { label: __('Custom', 'frontis-blocks'), value: 'custom' },
                    ]}
                    onChange={(value) => setAttributes({ megaMenuWidth: value })}
                />
                <SelectControl
                    label={__("Mega Menu Interaction", "frontis-blocks")}
                    value={megaMenuInteraction}
                    options={[
                        { label: __('Hover', 'frontis-blocks'), value: 'hover' },
                        { label: __('Click', 'frontis-blocks'), value: 'click' },
                    ]}
                    onChange={(value) => setAttributes({ megaMenuInteraction: value })}
                />
            </PanelBody>
        </>
    );

    const styleControls = (
        <>
            <PanelBody title={__("Menu Item Style", "frontis-blocks")} initialOpen={true}>
                <FB_ColorControl
                    label={__("Text Color", "frontis-blocks")}
                    value={menuItemColor}
                    onChange={(value) => setAttributes({ menuItemColor: value })}
                />

                <FB_ColorControl
                    label={__("Text Hover Color", "frontis-blocks")}
                    value={menuItemHoverColor}
                    onChange={(value) => setAttributes({ menuItemHoverColor: value })}
                />

                <FB_ColorControl
                    label={__("Background Color", "frontis-blocks")}
                    value={menuItemBackgroundColor}
                    onChange={(value) => setAttributes({ menuItemBackgroundColor: value })}
                />

                <FB_ColorControl
                    label={__("Background Hover Color", "frontis-blocks")}
                    value={menuItemHoverBackgroundColor}
                    onChange={(value) => setAttributes({ menuItemHoverBackgroundColor: value })}
                />
            </PanelBody>

            <PanelBody title={__("Submenu Style", "frontis-blocks")} initialOpen={false}>
                <FB_ColorControl
                    label={__("Background Color", "frontis-blocks")}
                    value={submenuBackgroundColor}
                    onChange={(value) => setAttributes({ submenuBackgroundColor: value })}
                />
            </PanelBody>

            <PanelBody title={__("Mega Menu Style", "frontis-blocks")} initialOpen={false}>
                <FB_ColorControl
                    label={__("Background Color", "frontis-blocks")}
                    value={megaMenuBackgroundColor}
                    onChange={(value) => setAttributes({ megaMenuBackgroundColor: value })}
                />
            </PanelBody>
        </>
    );

    const advancedControls = (
        <>
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={true}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={navigationDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ navigationDesktopSwitcher: value })}
                            tabletValue={navigationTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ navigationTabletSwitcher: value })}
                            mobileValue={navigationMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ navigationMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={navigationGlobalCustomCSS}
                            onChangeValue={(value) => setAttributes({ navigationGlobalCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
        </>
    );

    return (
        <>
            <style>{editorStyle}</style>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}