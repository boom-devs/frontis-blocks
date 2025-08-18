import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { useSelect } from '@wordpress/data';
import { ToggleControl, PanelBody, PanelRow, ColorPalette, RangeControl, Dropdown, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const FrontisThemeSiteEditor = () => {

    // Check if 'site-editor.php' exists in the URL
    const isSiteEditor = window.location.href.includes('site-editor.php');

    console.log("isSiteEditor isSiteEditor")
    console.log(isSiteEditor);

    // Only render in the site editor
    if (!isSiteEditor) {
        return null;
    }

    const themeColors = useSelect((select) => select('core/editor').getEditorSettings()?.colors || [], []);
    
    const [settings, setSettings] = useState({
        disableHeader: false,
        disableFooter: false,
        stickyHeader: false,
        stickyHeaderOffset: 0,
        transparentHeader: false,
        scrollToTop: false,
        smoothScroll: false,
        relatedPosts: false,
        authorBox: false,
        lazyLoading: false,
        stickyHeaderColor: null,
        transparentHeaderColor: 'transparent',
    });


    const updateSetting = (settingName, value) => {
        const newSettings = {
            ...settings,
            [settingName]: value
        };

        setSettings(newSettings);
        setStickyHeaderClass(newSettings);

        // Immediately update the setting via API
        apiFetch({
            path: 'frontis/v1/global-settings',
            method: 'POST',
            data: { setting: newSettings }
        }).then((response) => {
            console.log('Settings updated:', response);
        }).catch((error) => {
            console.error('Error updating settings:', error);
            // Revert the local state if the API call fails
            setSettings(settings);
        });
    };

    useEffect(() => {
        // Fetch initial settings
        apiFetch({ path: 'frontis/v1/global-settings' }).then((fetchedSettings) => {
            
            setSettings(fetchedSettings);
            // setStickyHeaderClass(fetchedSettings);
            setTimeout(() => {
                setStickyHeaderClass(fetchedSettings);
            }, 5000);
        });
    }, []);


    const setStickyHeaderClass = (settings) => {
        console.log(settings);
         const iframe = document.querySelector('iframe.edit-site-visual-editor__editor-canvas');
         const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
         const headerTag = iframeDoc.querySelector('header');
         const footerTag = iframeDoc.querySelector('footer');

         if(settings.disableHeader) {
            headerTag.style.background = 'repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px)';
            headerTag.style.opacity = '.4';
         } else if(headerTag) {
            headerTag.style.background = '';
            headerTag.style.opacity = '1';
         }

         if(settings.disableFooter) {
            footerTag.style.background = 'repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px)';
            footerTag.style.opacity = '.4';
         } else if(footerTag) {
            footerTag.style.background = '';
            footerTag.style.opacity = '1';
         }
         
         if(settings.stickyHeader) {
            if (iframe && iframe.contentDocument) {
                if (headerTag) {
                    headerTag.classList.add('fb-sticky-header');
                    headerTag.style.paddingTop = `${settings.stickyHeaderOffset}rem`;

                    iframe.contentWindow.addEventListener('scroll', function () {
                        if (iframe.contentWindow.scrollY > 50) {
                            headerTag.classList.add('scrolled');

                            const headerScrolled = iframeDoc.querySelector('.scrolled');

                            if(headerScrolled && settings.stickyHeaderColor){
                                headerScrolled.style.setProperty('--wp--preset--sticky--bg', settings.stickyHeaderColor);
                            }
                        } else {
                            headerTag.classList.remove('scrolled');
                        }
                    });
                }
            }
        } else {
            if (iframe && iframe.contentDocument) {

                if (headerTag) {
                    headerTag.classList.remove('fb-sticky-header');
                    headerTag.style.paddingTop = '';
                }
            }
        }

        if(settings.transparentHeader) {
            if (iframe && iframe.contentDocument) {
                if (headerTag) {
                    headerTag.classList.add('fb-transparent-header');
                    headerTag.style.setProperty('--wp--preset--transparent--bg', settings.transparentHeaderColor);
                }
            }
        } else {
            if (iframe && iframe.contentDocument) {
                if (headerTag) {
                    headerTag.classList.remove('fb-transparent-header');
                }
            }
        }
    }
    
    return (
        <>
            <PanelBody title='Header Settings'>
                <PanelRow>
                    <ToggleControl
                        label="Enable Sticky Header"
                        checked={settings.stickyHeader}
                        onChange={(value) => updateSetting('stickyHeader', value)}
                    />

                </PanelRow>
                {settings.stickyHeader && (
                    <>
                        <RangeControl
                            label="Header Offset (Rem)"
                            value={settings.stickyHeaderOffset}
                            onChange={(value) => updateSetting('stickyHeaderOffset', value)}
                            min={0}
                            max={100}
                        />
                        <PanelRow>
                            <div className='sticky-wrapper' style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
                                <div>
                                    <span>Background Color</span>
                                </div>
                                <Dropdown
                                    className="fb-sticky-header-bg-dropdown"
                                    contentClassName="fb-sticky-header-bg-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-sticky-header-bg-btn"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        // <ColorPicker
                                        //     color={settings.stickyHeaderColor || '#000000'}
                                        //     onChangeComplete={(color) => updateSetting('stickyHeaderColor', color.hex)}
                                        // />
                                        <ColorPalette
                                            colors={themeColors}
                                            value={settings.stickyHeaderColor}
                                            onChange={(value) => updateSetting('stickyHeaderColor', value)}
                                        />
                                    )}
                                />
                            </div>

                        </PanelRow>
                    </>
                )}
                <PanelRow>
                    <ToggleControl
                        label="Enable Transparent Header"
                        checked={settings.transparentHeader}
                        onChange={(value) => updateSetting('transparentHeader', value)}
                    />
                </PanelRow>
                {settings.transparentHeader && (
                    <PanelRow>
                        <div className='sticky-wrapper' style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <div>
                                <span>Background Color</span>
                            </div>
                            <Dropdown
                                className="fb-sticky-header-bg-dropdown"
                                contentClassName="fb-sticky-header-bg-dropdown-content"
                                popoverProps={{ placement: 'bottom-start' }}
                                renderToggle={({ isOpen, onToggle }) => (
                                    <Button
                                        onClick={onToggle}
                                        aria-expanded={isOpen}
                                        className="fb-sticky-header-bg-btn"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                            <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                        </svg>
                                    </Button>
                                )}
                                renderContent={() => (
                                    <ColorPalette
                                        colors={themeColors}
                                        value={settings.transparentHeaderColor}
                                        onChange={(value) => updateSetting('transparentHeaderColor', value)}
                                    />
                                )}
                            />
                        </div>

                    </PanelRow>
                )}
            </PanelBody>
            <PanelBody title="Disable Elements">
                <PanelRow>
                    <ToggleControl
                        label="Disable Header"
                        checked={settings.disableHeader}
                        onChange={(value) => updateSetting('disableHeader', value)}
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label="Disable Footer"
                        checked={settings.disableFooter}
                        onChange={(value) => updateSetting('disableFooter', value)}
                    />
                </PanelRow>

            </PanelBody>
            <PanelBody title='Features'>
                <PanelRow>
                    <ToggleControl
                        label="Scroll To Top"
                        checked={settings.scrollToTop}
                        onChange={(value) => updateSetting('scrollToTop', value)}
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label="Enable Smooth Scroll"
                        checked={settings.smoothScroll}
                        onChange={(value) => updateSetting('smoothScroll', value)}
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label="Enable Lazy Loading"
                        checked={settings.lazyLoading}
                        onChange={(value) => updateSetting('lazyLoading', value)}
                    />
                </PanelRow>
            </PanelBody>
        </>
    );
};

export default FrontisThemeSiteEditor;