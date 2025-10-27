import { ToggleControl, PanelBody, PanelRow, ColorPalette, Button, Dropdown } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const FrontisMetaBox = ({whichEditor}) => {
    const postType = useSelect(
        (select) => select('core/editor').getCurrentPostType(),
        []
    );

    const currentPostId = useSelect(select => select('core/editor').getCurrentPostId());

    const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
    const [templateMeta, setTemplateMeta] = useState({
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

    // Fetch global lazy loading setting
    const [globalLazyLoading, setGlobalLazyLoading] = useState(false);
    const [globalTransparentHeader, setGlobalTransparentHeader] = useState(false);
    const [globalStickyHeader, setGlobalStickyHeader] = useState(false);
    const [templateMetaPostEdit, setTemplateMetaPostEdit] = useState({
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

    const [postId, setPostId] = useState();

    const themeColors = useSelect((select) => select('core/editor').getEditorSettings()?.colors || [], []);
    useEffect(() => {
        apiFetch({ path: 'frontis/v1/global-settings' }).then((settings) => {
            setGlobalLazyLoading(settings.lazyLoading);
            setGlobalTransparentHeader(settings.transparentHeader);
            setGlobalStickyHeader(settings.stickyHeader);
        });
    }, []);

    const updateSetting = (settingName, value) => {
        if(postType === 'wp_template') {
            setTemplateMeta({ ...templateMeta, [settingName]: value });
        } else {
            setMeta({ ...meta, [settingName]: value });
        }
    };

    // Helper function to get meta value with default false
    const getMetaValue = (key) => {
        if(postType === 'wp_template') {
            if (!key || !templateMeta || typeof templateMeta !== 'object') {
                return false;
            }
            return templateMeta[key] ?? false;
        } else {
            console.log("Inside meta")
            if (!key || !meta || typeof meta !== 'object') {
                return false;
            }
            return meta[key] ?? false;
        }
    };

    useEffect(() => {
        if(postType === 'wp_template') {
            const template = wp.data.select('core').getEntityRecord('postType', 'wp_template', currentPostId);
            setPostId(template?.wp_id);

            // Make the apiFetch GET request with post_id as a query parameter
            wp.apiFetch({
                path: `frontis/v1/template-settings?post_id=${template?.wp_id}`,
                method: 'GET',
            }).then((response) => {
                if(response) {
                    console.log("Getting when page loaded");
                    console.log(response)
                    setTemplateMeta(response);
                }
            }).catch((error) => {
                console.error("Error fetching template settings:", error);
            });
        } else {
            setPostId(currentPostId);
        }

        checkPostPageTemplateMeta();
    }, []);


    console.log("getMetaValue('_frontis_meta_header_display')");
    console.log(getMetaValue('_frontis_meta_header_display'));

    // Update template meta when template meta changes
    useEffect(() => {
        if(postType === 'wp_template') {
            apiFetch({ path: 'frontis/v1/template-settings', method: 'POST', data: { setting: templateMeta, post_id: postId } }).then((response) => {
                console.log("response response")
                console.log(response);
            });
        }
    }, [templateMeta]);

    // Check this is post editor then get this page or post template and check what the status of header footer disabled
    const checkPostPageTemplateMeta = () => {
        if(whichEditor === 'post') {
            // Make the apiFetch GET request with post_id as a query parameter
            wp.apiFetch({
                path: `frontis/v1/template?id=${currentPostId}`,
                method: 'GET',
            }).then((response) => {
                if(response) {
                    setTemplateMetaPostEdit(response);
                }
            }).catch((error) => {
                console.error("Error fetching template settings:", error);
            });
        }
    }

    return (
        <>
            <PanelBody title="Disable Elements">
                {/* {
                    (whichEditor === 'post' && templateMetaPostEdit.disableHeader) ? (
                        <PanelRow>
                            <ToggleControl
                                label="Enable Header"
                                checked={templateMetaPostEdit.disableHeader}
                                onChange={(value) => updateSetting('_frontis_meta_header_override_global', value)}
                            />
                        </PanelRow>
                    ) : (
                        
                    )
                } */}
                <PanelRow>
                    <ToggleControl
                        label={(whichEditor === 'post' && templateMetaPostEdit.disableHeader) ? 'Enable Header' : 'Disable Header'}
                        checked={postType === 'wp_template' ? getMetaValue('disableHeader') : getMetaValue('_frontis_meta_header_display')}
                        onChange={(value) => postType === 'wp_template' ? updateSetting('disableHeader', value) : updateSetting('_frontis_meta_header_display', value)}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label="Disable Footer"
                        checked={getMetaValue('_frontis_meta_footer_display')}
                        onChange={(value) => updateSetting('_frontis_meta_footer_display', value)}
                    />
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label="Disable Page Title"
                        checked={getMetaValue('_frontis_meta_site_title_display')}
                        onChange={(value) => updateSetting('_frontis_meta_site_title_display', value)}
                    />
                </PanelRow>
            </PanelBody>
            {!getMetaValue('_frontis_meta_header_display') && (
                <PanelBody title='Header Settings'>
                    <PanelRow>
                        <ToggleControl
                            label="Disable Sticky Header"
                            checked={getMetaValue('_frontis_meta_sticky_header')}
                            onChange={(value) => updateSetting('_frontis_meta_sticky_header', value)}
                        />
                    </PanelRow>
                    {globalStickyHeader && !getMetaValue('_frontis_meta_sticky_header') && (
                    <>
                    <PanelRow>
                    <div className='sticky-wrapper' style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <ColorPalette
                                            colors={themeColors}
                                            value={getMetaValue('_frontis_meta_sticky_bg_color')}
                                            // onChange={(value) => updateSetting('_frontis_meta_sticky_bg_color', value)}
                                            onChange={(value) => updateSetting('_frontis_meta_sticky_bg_color', value || '')}
                                        />
                                        
                                    )}
                                />
                            </div>
                    </PanelRow>
                    </>
                    )}
                    <PanelRow>
                        <ToggleControl
                            label="Disable Transparent Header"
                            checked={getMetaValue('_frontis_meta_transparent_header')}
                            onChange={(value) => updateSetting('_frontis_meta_transparent_header', value)}
                        />
                    </PanelRow>
                    {globalTransparentHeader && !getMetaValue('_frontis_meta_transparent_header') && (
                        <PanelRow>
                            <div className='transparnet-wrapper' style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <ColorPalette
                                            colors={themeColors}
                                            value={getMetaValue('_frontis_meta_transparent_bg_color')}
                                            onChange={(value) => updateSetting('_frontis_meta_transparent_bg_color', value || '')}
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
                            checked={getMetaValue('_frontis_meta_lazy_load')}
                            onChange={(value) => updateSetting('_frontis_meta_lazy_load', value)}
                        />
                    </PanelRow>
                </PanelBody>
            )}
        </>
    );
};

export default FrontisMetaBox;