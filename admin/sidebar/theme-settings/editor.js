import {
    ToggleControl,
    PanelBody,
    PanelRow,
    ColorPalette,
    Button,
    Dropdown,
} from '@wordpress/components';
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

    // 🔹 TEMPLATE META
    // IMPORTANT: default empty object, jate global fallback kaj kore
    const [templateMeta, setTemplateMeta] = useState({});

    // template meta DB theke load shesh hoise kina
    const [isTemplateMetaLoaded, setIsTemplateMetaLoaded] = useState(false);

    // 🔹 GLOBAL SETTINGS (read-only for metabox)
    const [globalSettings, setGlobalSettings] = useState({
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

    // convenience flags
    const globalLazyLoading = globalSettings.lazyLoading;
    const globalTransparentHeader = globalSettings.transparentHeader;
    const globalStickyHeader = globalSettings.stickyHeader;

    // Template settings for the template used by this post/page
    const [templateMetaPostEdit, setTemplateMetaPostEdit] = useState({});

    const [postId, setPostId] = useState();

    const themeColors = useSelect(
        (select) => select('core/editor').getEditorSettings()?.colors || [],
        []
    );

    // 🔹 Load GLOBAL settings (FrontisThemeSiteEditor theke save kora option)
    useEffect(() => {
        const fetchGlobalSettings = () => {
            apiFetch({ path: 'frontis/v1/global-settings' })
                .then((settings) => {
                    if (settings && typeof settings === 'object') {
                        setGlobalSettings((prev) => ({
                            ...prev,
                            ...settings,
                        }));
                    }
                })
                .catch((error) => {
                    console.error('Error fetching global settings:', error);
                });
        };

        // Initial load
        fetchGlobalSettings();

        // Poll for global settings changes every 2 seconds
        const intervalId = setInterval(fetchGlobalSettings, 2000);

        return () => clearInterval(intervalId);
    }, []);

    /**
     * Helper: Map post meta keys to global settings keys
     */
    const getGlobalKeyForMetaKey = (metaKey) => {
        const keyMap = {
            '_frontis_meta_header_display': 'disableHeader',
            '_frontis_meta_footer_display': 'disableFooter',
            '_frontis_meta_sticky_header': 'stickyHeader',
            '_frontis_meta_transparent_header': 'transparentHeader',
            '_frontis_meta_sticky_bg_color': 'stickyHeaderColor',
            '_frontis_meta_transparent_bg_color': 'transparentHeaderColor',
            '_frontis_meta_lazy_load': 'lazyLoading',
        };
        return keyMap[metaKey] || null;
    };

    /**
     * Helper: Map post meta keys to template meta keys
     */
    const getTemplateKeyForMetaKey = (metaKey) => {
        const keyMap = {
            '_frontis_meta_sticky_header': 'stickyHeader',
            '_frontis_meta_transparent_header': 'transparentHeader',
            '_frontis_meta_sticky_bg_color': 'stickyHeaderColor',
            '_frontis_meta_transparent_bg_color': 'transparentHeaderColor',
        };
        return keyMap[metaKey] || metaKey;
    };

    const updateSetting = (settingName, value) => {
        if (postType === 'wp_template') {
            // Template editor → frontis_template_options
            // Map post meta keys to template keys and invert if needed
            const templateKey = getTemplateKeyForMetaKey(settingName);
            let templateValue = value;
            
            // Invert for "disable" meta keys (sticky header, transparent header)
            // Meta "disable" = true means template "enable" = false
            if (
                settingName === '_frontis_meta_sticky_header' ||
                settingName === '_frontis_meta_transparent_header'
            ) {
                templateValue = !value;
            }
            
            setTemplateMeta((prev) => ({
                ...prev,
                [templateKey]: templateValue,
            }));
        } else {
            // Normal post/page → post meta
            setMeta({
                ...(meta || {}),
                [settingName]: value,
            });
        }
    };

    /**
     * Template → Post fallback mapping (template + global)
     */
    const getTemplateFallbackValue = (key) => {
        const tpl =
            templateMetaPostEdit && typeof templateMetaPostEdit === 'object'
                ? templateMetaPostEdit
                : {};
        const global = globalSettings || {};

        switch (key) {
            case '_frontis_meta_header_display':
                if (Object.prototype.hasOwnProperty.call(tpl, 'disableHeader')) {
                    return tpl.disableHeader ?? false;
                }
                return global.disableHeader ?? false;

            case '_frontis_meta_footer_display':
                if (Object.prototype.hasOwnProperty.call(tpl, 'disableFooter')) {
                    return tpl.disableFooter ?? false;
                }
                return global.disableFooter ?? false;

            case '_frontis_meta_site_title_display':
                if (
                    Object.prototype.hasOwnProperty.call(
                        tpl,
                        'disablePageTitle'
                    )
                ) {
                    return tpl.disablePageTitle ?? false;
                }
                return false;

            case '_frontis_meta_sticky_header':
                // Note: _frontis_meta_sticky_header = "Disable Sticky Header"
                // Global stickyHeader = "Enable Sticky Header"
                // So we need to invert: if global enabled, return false (not disabled)
                if (
                    Object.prototype.hasOwnProperty.call(
                        tpl,
                        'stickyHeader'
                    )
                ) {
                    // Template stickyHeader: true = enabled, so return false (not disabled)
                    return !(tpl.stickyHeader ?? false);
                }
                // Global stickyHeader: true = enabled, so return false (not disabled)
                return !(global.stickyHeader ?? false);

            case '_frontis_meta_transparent_header':
                // Note: _frontis_meta_transparent_header = "Disable Transparent Header"
                // Global transparentHeader = "Enable Transparent Header"
                // So we need to invert: if global enabled, return false (not disabled)
                if (
                    Object.prototype.hasOwnProperty.call(
                        tpl,
                        'transparentHeader'
                    )
                ) {
                    // Template transparentHeader: true = enabled, so return false (not disabled)
                    return !(tpl.transparentHeader ?? false);
                }
                // Global transparentHeader: true = enabled, so return false (not disabled)
                return !(global.transparentHeader ?? false);

            case '_frontis_meta_sticky_bg_color':
                if (
                    Object.prototype.hasOwnProperty.call(
                        tpl,
                        'stickyHeaderColor'
                    )
                ) {
                    return tpl.stickyHeaderColor ?? '';
                }
                return global.stickyHeaderColor ?? '';

            case '_frontis_meta_transparent_bg_color':
                if (
                    Object.prototype.hasOwnProperty.call(
                        tpl,
                        'transparentHeaderColor'
                    )
                ) {
                    return tpl.transparentHeaderColor ?? 'transparent';
                }
                return global.transparentHeaderColor ?? 'transparent';

            case '_frontis_meta_lazy_load':
                if (
                    Object.prototype.hasOwnProperty.call(
                        tpl,
                        'lazyLoading'
                    )
                ) {
                    return tpl.lazyLoading ?? false;
                }
                return global.lazyLoading ?? false;

            default:
                return false;
        }
    };

    /**
     * Helper: meta value with template + global fallback
     * Priority: Meta/Template Meta → Global Settings → Default
     */
    const getMetaValue = (key, defaultValue = false) => {
        if (!key) return defaultValue;

        // ===== TEMPLATE EDITOR =====
        if (postType === 'wp_template') {
            const tpl = templateMeta || {};
            
            // Map post meta keys to template keys (e.g., _frontis_meta_sticky_header → stickyHeader)
            const templateKey = getTemplateKeyForMetaKey(key);

            // Check if template has explicit value (override)
            const hasTplKey =
                tpl &&
                typeof tpl === 'object' &&
                Object.prototype.hasOwnProperty.call(tpl, templateKey);

            if (hasTplKey) {
                let val = tpl[templateKey];
                
                // Invert for "disable" meta keys (sticky header, transparent header)
                // Template "enable" = true means meta "disable" = false
                if (
                    key === '_frontis_meta_sticky_header' ||
                    key === '_frontis_meta_transparent_header'
                ) {
                    val = !val;
                }
                
                // If value is explicitly set (even if false), use it
                if (val !== null && val !== undefined) {
                    console.log(
                        '[getMetaValue][TEMPLATE] key=',
                        key,
                        '(templateKey:',
                        templateKey,
                        ') → TEMPLATE META (OVERRIDE)',
                        val
                    );
                    return val;
                }
            }

            // 🔹 fallback to global (sync from global if template e value nai)
            const globalKey = getGlobalKeyForMetaKey(key) || templateKey;
            const global = globalSettings || {};
            const hasGlobalKey =
                global &&
                typeof global === 'object' &&
                Object.prototype.hasOwnProperty.call(global, globalKey);

            if (hasGlobalKey) {
                let val = global[globalKey];
                
                // Invert for "disable" meta keys (sticky header, transparent header)
                if (
                    key === '_frontis_meta_sticky_header' ||
                    key === '_frontis_meta_transparent_header'
                ) {
                    val = !val;
                }
                
                console.log(
                    '[getMetaValue][TEMPLATE] key=',
                    key,
                    '(globalKey:',
                    globalKey,
                    ') → GLOBAL FALLBACK',
                    val
                );
                return val ?? defaultValue;
            }

            console.log(
                '[getMetaValue][TEMPLATE] key=',
                key,
                '→ DEFAULT',
                defaultValue
            );
            return defaultValue;
        }

        // ===== PAGE / POST EDITOR =====
        const hasMetaKey =
            meta &&
            typeof meta === 'object' &&
            Object.prototype.hasOwnProperty.call(meta, key);

        // If post has explicit meta value, use it (override)
        if (hasMetaKey) {
            const raw = meta[key];
            // Check if value is explicitly set (not null/undefined)
            if (raw !== null && raw !== undefined) {
                console.log(
                    '[getMetaValue][POST] key=',
                    key,
                    '→ using POST META (OVERRIDE)',
                    raw
                );
                return raw;
            }
        }

        // Ei page e kono explicit meta nai → template + global fallback use korbo
        if (whichEditor === 'post') {
            const fallback = getTemplateFallbackValue(key);
            console.log(
                '[getMetaValue][POST] key=',
                key,
                '→ using TEMPLATE/GLOBAL FALLBACK',
                fallback
            );
            return fallback ?? defaultValue;
        }

        // Direct global fallback for post meta keys
        const globalKey = getGlobalKeyForMetaKey(key);
        if (globalKey) {
            const global = globalSettings || {};
            if (
                global &&
                typeof global === 'object' &&
                Object.prototype.hasOwnProperty.call(global, globalKey)
            ) {
                let val = global[globalKey];
                
                // Invert for "disable" meta keys (sticky header, transparent header)
                // Global "enable" = true means meta "disable" = false
                if (
                    key === '_frontis_meta_sticky_header' ||
                    key === '_frontis_meta_transparent_header'
                ) {
                    val = !val;
                }
                
                console.log(
                    '[getMetaValue][POST] key=',
                    key,
                    '→ GLOBAL FALLBACK (',
                    globalKey,
                    ')',
                    val
                );
                return val ?? defaultValue;
            }
        }

        console.log(
            '[getMetaValue][POST] key=',
            key,
            '→ using DEFAULT',
            defaultValue
        );
        return defaultValue;
    };

    // Template / Post–er jonno data load
    useEffect(() => {
        if (postType === 'wp_template') {
            const templateEntity = wp
                .data
                .select('core')
                .getEntityRecord('postType', 'wp_template', currentPostId);

            const dbId = templateEntity?.wp_id || currentPostId;

            console.log('wp_template entity :', templateEntity);
            console.log('dbId used for template-settings :', dbId);

            if (!dbId) {
                return;
            }

            setPostId(dbId);
            setIsTemplateMetaLoaded(false);

            wp.apiFetch({
                path: `frontis/v1/template-settings?post_id=${dbId}`,
                method: 'GET',
            })
                .then((response) => {
                    console.log('template-settings GET :', response);

                    if (response && typeof response === 'object') {
                        setTemplateMeta(response);
                    } else {
                        setTemplateMeta({});
                    }
                    setIsTemplateMetaLoaded(true);
                })
                .catch((error) => {
                    console.error('Error fetching template settings:', error);
                    setTemplateMeta({});
                    setIsTemplateMetaLoaded(true);
                });
        } else {
            setPostId(currentPostId);
            setIsTemplateMetaLoaded(false);
            checkPostPageTemplateMeta();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postType, currentPostId]);

    // Template meta change hole API te save
    useEffect(() => {
        if (postType === 'wp_template' && postId && isTemplateMetaLoaded) {
            apiFetch({
                path: 'frontis/v1/template-settings',
                method: 'POST',
                data: { setting: templateMeta, post_id: postId },
            })
                .then((res) => {
                    console.log('template-settings POST :', res);
                })
                .catch((err) => {
                    console.error('Error saving template settings:', err);
                });
        }
    }, [templateMeta, postType, postId, isTemplateMetaLoaded]);

    // Post editor → ei post kon template use korse tar settings nao
    const checkPostPageTemplateMeta = () => {
        if (whichEditor === 'post') {
            wp.apiFetch({
                path: `frontis/v1/template?id=${currentPostId}`,
                method: 'GET',
            })
                .then((response) => {
                    if (response && typeof response === 'object') {
                        setTemplateMetaPostEdit(response);
                    } else {
                        setTemplateMetaPostEdit({});
                    }
                })
                .catch((error) => {
                    console.error('Error fetching template settings:', error);
                    setTemplateMetaPostEdit({});
                });
        }
    };

    const isTemplateEditor = postType === 'wp_template';

    const headerDisabled = isTemplateEditor
        ? getMetaValue('disableHeader')
        : getMetaValue('_frontis_meta_header_display');

    const footerDisabled = isTemplateEditor
        ? getMetaValue('disableFooter')
        : getMetaValue('_frontis_meta_footer_display');

    const pageTitleDisabled = getMetaValue('_frontis_meta_site_title_display');

    const stickyHeaderDisabled = getMetaValue('_frontis_meta_sticky_header');
    const transparentHeaderDisabled = getMetaValue(
        '_frontis_meta_transparent_header'
    );

    const stickyBgColor = getMetaValue('_frontis_meta_sticky_bg_color', '');
    const transparentBgColor = getMetaValue(
        '_frontis_meta_transparent_bg_color',
        'transparent'
    );

    const lazyLoadDisabled = getMetaValue('_frontis_meta_lazy_load');

    // debug logs
    useEffect(() => {
        console.log('===== PAGE HEADER DEBUG =====');
        console.log('currentPostId                        :', currentPostId);
        console.log('postType                             :', postType);
        console.log('whichEditor                          :', whichEditor);
        console.log(
            'templateMetaPostEdit.disableHeader   :',
            templateMetaPostEdit.disableHeader
        );
        console.log('raw meta object                      :', meta);
        console.log(
            'meta._frontis_meta_header_display    :',
            meta?._frontis_meta_header_display
        );
        console.log('FINAL headerDisabled (UI)            :', headerDisabled);
        console.log('GLOBAL SETTINGS                      :', globalSettings);
        console.log('TEMPLATE META                        :', templateMeta);
    }, [
        currentPostId,
        postType,
        whichEditor,
        templateMetaPostEdit.disableHeader,
        meta,
        headerDisabled,
        globalSettings,
        templateMeta,
    ]);

    return (
        <>
            <PanelBody title="Disable Elements">
                <PanelRow>
                    <ToggleControl
                        label="Disable Header"
                        checked={headerDisabled}
                        onChange={(value) =>
                            isTemplateEditor
                                ? updateSetting('disableHeader', value)
                                : updateSetting(
                                      '_frontis_meta_header_display',
                                      value
                                  )
                        }
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label="Disable Footer"
                        checked={footerDisabled}
                        onChange={(value) =>
                            isTemplateEditor
                                ? updateSetting('disableFooter', value)
                                : updateSetting(
                                      '_frontis_meta_footer_display',
                                      value
                                  )
                        }
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label="Disable Page Title"
                        checked={pageTitleDisabled}
                        onChange={(value) =>
                            updateSetting(
                                '_frontis_meta_site_title_display',
                                value
                            )
                        }
                    />
                </PanelRow>
            </PanelBody>

            {!headerDisabled && (
                <PanelBody title="Header Settings">
                    <PanelRow>
                        <ToggleControl
                            label="Disable Sticky Header"
                            checked={stickyHeaderDisabled}
                            onChange={(value) =>
                                updateSetting(
                                    '_frontis_meta_sticky_header',
                                    value
                                )
                            }
                        />
                    </PanelRow>

                    {globalStickyHeader && !stickyHeaderDisabled && (
                        <PanelRow>
                            <div
                                className="sticky-wrapper"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}
                            >
                                <div>
                                    <span>Sticky Background</span>
                                </div>
                                <Dropdown
                                    className="fb-transparent-header-bg-dropdown"
                                    contentClassName="fb-transparent-header-bg-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-transparent-header-bg-btn"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <path
                                                    d="M2.66699 14.666H13.3337"
                                                    stroke="#1C274C"
                                                />
                                                <path
                                                    d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291"
                                                    stroke="#1C274C"
                                                />
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <ColorPalette
                                            colors={themeColors}
                                            value={stickyBgColor}
                                            onChange={(value) =>
                                                updateSetting(
                                                    '_frontis_meta_sticky_bg_color',
                                                    value || ''
                                                )
                                            }
                                        />
                                    )}
                                />
                            </div>
                        </PanelRow>
                    )}

                    <PanelRow>
                        <ToggleControl
                            label="Disable Transparent Header"
                            checked={transparentHeaderDisabled}
                            onChange={(value) =>
                                updateSetting(
                                    '_frontis_meta_transparent_header',
                                    value
                                )
                            }
                        />
                    </PanelRow>

                    {globalTransparentHeader && !transparentHeaderDisabled && (
                        <PanelRow>
                            <div
                                className="transparnet-wrapper"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}
                            >
                                <div>
                                    <span>Transparent Background</span>
                                </div>
                                <Dropdown
                                    className="fb-transparent-header-bg-dropdown"
                                    contentClassName="fb-transparent-header-bg-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-transparent-header-bg-btn"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <path
                                                    d="M2.66699 14.666H13.3337"
                                                    stroke="#1C274C"
                                                />
                                                <path
                                                    d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291"
                                                    stroke="#1C274C"
                                                />
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <ColorPalette
                                            colors={themeColors}
                                            value={transparentBgColor}
                                            onChange={(value) =>
                                                updateSetting(
                                                    '_frontis_meta_transparent_bg_color',
                                                    value || ''
                                                )
                                            }
                                        />
                                    )}
                                />
                            </div>
                        </PanelRow>
                    )}
                </PanelBody>
            )}

            {globalLazyLoading && (
                <PanelBody title="Disable Features">
                    <PanelRow>
                        <ToggleControl
                            label="Disable Lazy Loading"
                            checked={lazyLoadDisabled}
                            onChange={(value) =>
                                updateSetting('_frontis_meta_lazy_load', value)
                            }
                        />
                    </PanelRow>
                </PanelBody>
            )}
        </>
    );
};

export default FrontisMetaBox;
