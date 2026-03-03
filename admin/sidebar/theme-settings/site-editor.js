import { useSelect } from '@wordpress/data';
import {
    ToggleControl,
    PanelBody,
    PanelRow
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const FrontisThemeSiteEditor = () => {

    const isSiteEditor = window.location.href.includes('site-editor.php');
    if (!isSiteEditor) return null;

    const [settings, setSettings] = useState({
        disableHeader: false,
        disableFooter: false
    });

    useEffect(() => {
        const unsubscribe = wp.data.subscribe(() => {
            const isReady = wp.data.select('core/editor').__unstableIsEditorReady
                ? wp.data.select('core/editor').__unstableIsEditorReady()
                : true;

            if (isReady) {
                apiFetch({ path: 'frontis/v1/global-settings' })
                    .then((fetched) => {
                        setSettings({
                            disableHeader: fetched.disableHeader,
                            disableFooter: fetched.disableFooter
                        });
                    });

                unsubscribe();
            }
        });
    }, []);

    const updateGlobalSetting = (key, value) => {
        const updated = { ...settings, [key]: value };
        setSettings(updated);

        apiFetch({
            path: 'frontis/v1/global-settings',
            method: 'POST',
            data: { scope: 'global', setting: updated }
        });
    };

    useEffect(() => {
        wp.data.dispatch('core/editor').editPost({
            meta: { _dummy: Date.now() }
        });
    }, [settings]);

    return (
        <>
            <PanelBody title="Disable Elements">
                <PanelRow>
                    <ToggleControl
                        label="Disable Header"
                        checked={settings.disableHeader}
                        onChange={(value) => updateGlobalSetting('disableHeader', value)}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label="Disable Footer"
                        checked={settings.disableFooter}
                        onChange={(value) => updateGlobalSetting('disableFooter', value)}
                    />
                </PanelRow>
            </PanelBody>
        </>
    );
};

export default FrontisThemeSiteEditor;
