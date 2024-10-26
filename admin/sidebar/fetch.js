/**
 * Define AJAX Action names
 */
const updateGlobalStyleAction = 'fb_global_styles_update';
const getGlobalStyleAction = 'fb_global_styles_get';

const {nonce, ajaxUrl} = window.frontisBlocksAdminSidebar;


/**
 * Function for Update Global Settings
 * @param {*} value
 * @returns {object}
 */
export const updateGlobalStyle = (value, key = 'global_colors') => {
    let data = new FormData();
    data.append("action", updateGlobalStyleAction);
    data.append("admin_nonce", nonce);
    data.append("fb_global_style_key", key);
    data.append("fb_global_style_value", JSON.stringify(value));

    return fetch(ajaxUrl, {
        method: 'POST',
        body: data,
    }) // wrapped
        .then(res => res.text())
        .then(data => {
            const response = JSON.parse(data);
            if (response.success) {
                return response.data
            }
            else {
                console.log("Update failed! ", response.data)
            }
        })
        .catch(err => console.log(err));
}

/**
 * Function for Get Global Settings
 * @returns
 */
export const getGlobalSettings = () => {
    let data = new FormData();
    data.append("action", getGlobalStyleAction);
    data.append("admin_nonce", nonce);

    return fetch(ajaxUrl, {
        method: 'POST',
        body: data,
    }) // wrapped
        .then(res => res.text())
        .then(data => {
            const response = JSON.parse(data);
            if (response.success) {
                return response.data
            }
            else {
                return false;
            }
        })
        .catch(err => console.log(err));
}

/**
 * Function for Update block defaults
 * @param {*} value
 * @returns {Object}
 */
export const updateBlockDefaults = (value) => {
    let data = new FormData();
    data.append("action", updateBlockDefaultsAction);
    data.append("admin_nonce", nonce);
    data.append("fb_block_defaults_value", JSON.stringify(value));

    return fetch(EssentialBlocksLocalize.ajax_url, {
        method: 'POST',
        body: data,
    }) // wrapped
        .then(res => res.text())
        .then(data => {
            const response = JSON.parse(data);
            if (response.success) {
                return response.data
            }
            else {
                console.log("failed update", data)
            }
        })
        .catch(err => console.log(err));
}

/**
 * Function for Get Block Defaults
 * @returns
 */
export const getBlockDefaults = () => {
    let data = new FormData();
    data.append("action", getBlockDefaultsAction);
    data.append("admin_nonce", nonce);

    return fetch(EssentialBlocksLocalize.ajax_url, {
        method: 'POST',
        body: data,
    }) // wrapped
        .then(res => res.text())
        .then(data => {
            const response = JSON.parse(data);
            if (response.success) {
                return response.data
            }
            else {
                return false;
            }
        })
        .catch(err => console.log(err));
}
