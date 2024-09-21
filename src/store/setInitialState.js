import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';
import { store as frontisStore } from '@Store';

const setInitialState = () => {
    apiFetch( {
        path: '/frontis/v1/editor',
    } ).then( ( data ) => {
        const initialState = {
            initialStateSetFlag : true,
            globalBlockStyles: data.frontis_global_block_styles,
            globalBlockStylesFontFamilies: data.frontis_gbs_google_fonts_editor,
            enableQuickActionSidebar: data.fb_enable_quick_action_sidebar, // 'enabled' | 'disabled' quick action sidebar.
            defaultAllowedQuickSidebarBlocks: data.fb_quick_sidebar_allowed_blocks, // Default blocks allowed in the quick action sidebar.
        };
        dispatch( frontisStore ).updateInitialState( initialState );
    } );
};

export default setInitialState;
