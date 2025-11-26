import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const FrontisMetaBox = () => {

    // FIX: Correct site editor ID → DB ID conversion
    const getCorrectPostId = () => {
        // Site Editor
        const edited = wp.data.select('core/edit-site')?.getEditedPostId();
        if (edited) {
            const templateEntity = wp.data
                .select('core')
                .getEntityRecord('postType', 'wp_template', edited);

            const dbId = templateEntity?.wp_id;
            if (dbId && Number.isInteger(dbId)) return dbId;
        }

        // Page/Post Editor fallback
        return wp.data.select('core/editor')?.getCurrentPostId();
    };

    const postType = useSelect(
        (select) => select('core/editor').getCurrentPostType(),
        []
    );

    const currentPostId = getCorrectPostId();

    const [globalSettings, setGlobalSettings] = useState({});
    const [templateMeta, setTemplateMeta] = useState({});
    const [pageSettings, setPageSettings] = useState({});

    const isTemplateEditor = postType === 'wp_template';

    // Load Global Settings
    useEffect(() => {
        apiFetch({ path: 'frontis/v1/global-settings' })
            .then(setGlobalSettings);
    }, []);

    // Load Template Settings
    useEffect(() => {
        if (!currentPostId || !isTemplateEditor) return;

        apiFetch({
            path: `frontis/v1/template-settings?post_id=${currentPostId}`,
        }).then((res) => setTemplateMeta(res || {}));
    }, [currentPostId, postType]);

    // Load Page/Post Settings
    useEffect(() => {
        if (!currentPostId || isTemplateEditor) return;

        apiFetch({
            path: `frontis/v1/page-settings?post_id=${currentPostId}`,
        }).then((res) => setPageSettings(res || {}));
    }, [currentPostId, postType]);

    // Inherited value: Page → Template → Global
    const inherit = (key) => {
        if (pageSettings[key] !== undefined) return pageSettings[key];
        if (templateMeta[key] !== undefined) return templateMeta[key];
        if (globalSettings[key] !== undefined) return globalSettings[key];
        return false;
    };

    const updateSetting = (key, value) => {
        if (!currentPostId) return;

        if (isTemplateEditor) {
            const updated = { ...templateMeta, [key]: value };
            setTemplateMeta(updated);

            apiFetch({
                path: 'frontis/v1/template-settings',
                method: 'POST',
                data: { post_id: currentPostId, setting: updated },
            });
        } else {
            const updated = { ...pageSettings, [key]: value };
            setPageSettings(updated);

            apiFetch({
                path: 'frontis/v1/page-settings',
                method: 'POST',
                data: { post_id: currentPostId, setting: updated },
            });
        }
    };

    return (
        <PanelBody title="Disable Elements">
            <PanelRow>
                <ToggleControl
                    label="Disable Header"
                    checked={inherit("disableHeader")}
                    onChange={(v) => updateSetting("disableHeader", v)}
                />
            </PanelRow>

            <PanelRow>
                <ToggleControl
                    label="Disable Footer"
                    checked={inherit("disableFooter")}
                    onChange={(v) => updateSetting("disableFooter", v)}
                />
            </PanelRow>

            <PanelRow>
                <ToggleControl
                    label="Disable Page Title"
                    checked={inherit("disablePageTitle")}
                    onChange={(v) => updateSetting("disablePageTitle", v)}
                />
            </PanelRow>
        </PanelBody>
    );
};

export default FrontisMetaBox;
