import { useSelect } from '@wordpress/data';
import { ToggleControl, PanelBody, PanelRow, ColorPalette, RangeControl, Dropdown, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const FrontisThemeSiteEditor = () => {

    // Check if 'site-editor.php' exists in the URL
    const isSiteEditor = window.location.href.includes('site-editor.php');
    
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
        stickyHeaderColor: '',
        transparentHeaderColor: 'transparent',
    });

    useEffect(() => {
        const unsubscribe = wp.data.subscribe(() => {
            const isReady = wp.data.select('core/editor').__unstableIsEditorReady 
                ? wp.data.select('core/editor').__unstableIsEditorReady() 
                : true;
    
            if (isReady) {
                apiFetch({ path: 'frontis/v1/global-settings' }).then((fetchedSettings) => {
                    setSettings(fetchedSettings);
                    setStickyHeaderClass(fetchedSettings);
                });
    
                unsubscribe();
            }
        });
    }, []);
    
    const updateGlobalSetting = (settingName, value) => {
        const newSettings = { ...settings, [settingName]: value };
        setSettings(newSettings);
    
        apiFetch({
            path: 'frontis/v1/global-settings',
            method: 'POST',
            data: { scope: 'global', setting: newSettings }
        }).then((response) => {
            console.log("Global updated:", response);
        });
    };


    const setStickyHeaderClass = (settings) => {

    }

    // Enable save button on change any thing
    useEffect(() => {
        wp.data.dispatch('core/editor').editPost({ meta: { _dummy: new Date().getTime() } });
    },[settings]);

    console.log(settings);
    
    return (
        <>
            <PanelBody title='Header Settings'>
                <PanelRow>
                    <ToggleControl
                        label="Enable Sticky Header"
                        checked={settings.stickyHeader}
                        onChange={(value) => updateGlobalSetting('stickyHeader', value)}
                    />

                </PanelRow>
                {settings.stickyGlobalHeader && (
                    <>
                        <RangeControl
                            label="Header Offset (Rem)"
                            value={settings.stickyHeaderOffset}
                            onChange={(value) => updateGlobalSetting('stickyHeaderOffset', value)}
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
                                    <span style={{fontWeight: 600}}>Background Color</span>
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
                                            value={settings.stickyHeaderColor}
                                            onChange={(value) => updateGlobalSetting('stickyHeaderColor', value)}
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
                        onChange={(value) => updateGlobalSetting('transparentHeader', value)}
                    />
                </PanelRow>
                {settings.transparentGlobalHeader && (
                    <PanelRow>
                        <div className='sticky-wrapper' style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <div>
                                <span style={{fontWeight: 600}}>Background Color</span>
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
                                        onChange={(value) => updateGlobalSetting('transparentHeaderColor', value)}
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
                        label={settings.disableHeader ? 'Disable Header' : 'Disable Header'}
                        checked={settings.disableHeader}
                        onChange={(value) => updateGlobalSetting('disableHeader', value)}
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label={settings.disableFooter ? 'Disable Footer' : 'Disable Footer'} 
                        checked={settings.disableFooter}
                        onChange={(value) => updateGlobalSetting('disableFooter', value)}
                    />
                </PanelRow>

            </PanelBody>
            {frontisBlocksAdminSidebar.frontis_theme &&
                <PanelBody title='Features'>
                    <PanelRow>
                        <ToggleControl
                            label="Scroll To Top"
                            checked={settings.scrollToTop}
                            onChange={(value) => updateGlobalSetting('scrollToTop', value)}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label="Enable Smooth Scroll"
                            checked={settings.smoothScroll}
                            onChange={(value) => updateGlobalSetting('smoothScroll', value)}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label="Enable Lazy Loading"
                            checked={settings.lazyLoading}
                            onChange={(value) => updateGlobalSetting('lazyLoading', value)}
                        />
                    </PanelRow>
                </PanelBody>
            }
        </>
    );
};

export default FrontisThemeSiteEditor;