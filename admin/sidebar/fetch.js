/**
 * Define AJAX Action names
 */
const updateGlobalStyleAction = 'fb_update_global_colors';
const getGlobalStyleAction = 'fb_get_global_colors';

const {nonce, ajaxUrl} = window.frontisBlocksAdminSidebar;


/**
 * Function for Update Global Settings
 * @param {*} value
 * @returns {object}
 */
export const updateGlobalStyle = (value, key = 'fb_update_global_colors') => {
    let data = new FormData();
    data.append("action", updateGlobalStyleAction);
    data.append("fb_sidebar_nonce", nonce);
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

export const getGlobalSettings = () => {
    let data = new FormData();
    data.append("action", getGlobalStyleAction);
    data.append("fb_sidebar_nonce", nonce);

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
