import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const FrontisMetaBox = ({ whichEditor }) => {
    const postType = useSelect(
        (select) => select('core/editor').getCurrentPostType(),
        []
    );

    const currentPostId = useSelect((select) =>
        select('core/editor').getCurrentPostId()
    );

    const [meta, setMeta] = useEntityProp('postType', postType, 'meta');

    const [templateMeta, setTemplateMeta] = useState({});
    const [templateMetaLoaded, setTemplateMetaLoaded] = useState(false);

    const [globalSettings, setGlobalSettings] = useState({
        disableHeader: false,
        disableFooter: false,
        disablePageTitle: false,
    });

    const [pageSettings, setPageSettings] = useState({});
    const [pageLoaded, setPageLoaded] = useState(false);

    const isTemplateEditor = postType === 'wp_template';

    // 🔹 Load Global Settings
    useEffect(() => {
        apiFetch({ path: 'frontis/v1/global-settings' }).then((settings) => {
            setGlobalSettings(settings);
        });
    }, []);

    // 🔹 Load Template Meta (Template Editor)
    useEffect(() => {
        if (!isTemplateEditor) return;

        apiFetch({
            path: `frontis/v1/template-settings?post_id=${currentPostId}`,
        }).then((res) => {
            setTemplateMeta(res || {});
            setTemplateMetaLoaded(true);
        });
    }, [postType, currentPostId]);

    // 🔹 Load Page Settings (Page/Post Editor)
    useEffect(() => {
        if (isTemplateEditor) return;

        apiFetch({
            path: `frontis/v1/page-settings?post_id=${currentPostId}`,
        }).then((res) => {
            setPageSettings(res || {});
            setPageLoaded(true);
        });
    }, [postType, currentPostId]);

    // 🔹 Value With Priority: Page → Template → Global
    const inherit = (key) => {
        if (pageSettings[key] !== undefined) return pageSettings[key];
        if (templateMeta[key] !== undefined) return templateMeta[key];
        if (globalSettings[key] !== undefined) return globalSettings[key];
        return false;
    };

    const disableHeader = inherit("disableHeader");
    const disableFooter = inherit("disableFooter");
    const disablePageTitle = inherit("disablePageTitle");

    // 🔹 Update Setting
    const updateSetting = (metaKey, value) => {
        if (isTemplateEditor) {
            const updated = { ...templateMeta, [metaKey]: value };
            setTemplateMeta(updated);

            apiFetch({
                path: 'frontis/v1/template-settings',
                method: 'POST',
                data: { setting: updated, post_id: currentPostId },
            });
        } else {
            const updated = { ...pageSettings, [metaKey]: value };
            setPageSettings(updated);

            apiFetch({
                path: 'frontis/v1/page-settings',
                method: 'POST',
                data: { setting: updated, post_id: currentPostId },
            });
        }
    };

    return (
        <>
            <PanelBody title="Disable Elements">
                <PanelRow>
                    <ToggleControl
                        label="Disable Header"
                        checked={disableHeader}
                        onChange={(v) => updateSetting("disableHeader", v)}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label="Disable Footer"
                        checked={disableFooter}
                        onChange={(v) => updateSetting("disableFooter", v)}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label="Disable Page Title"
                        checked={disablePageTitle}
                        onChange={(v) => updateSetting("disablePageTitle", v)}
                    />
                </PanelRow>
            </PanelBody>
        </>
    );
};

export default FrontisMetaBox;