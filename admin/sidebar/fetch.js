/**
 * Define AJAX Action names
 */
const updateGlobalStyleAction = 'fb_update_global_colors';
const getGlobalStyleAction = 'fb_get_global_colors';

const {nonce, ajaxUrl} = window.frontisBlocksAdminSidebar;


/**
 * Function for Update Global Settings
 * @param {*} value
 * @param key
 * @returns {object}
 */

export const updateGlobalStyle = async (value, key = 'fb_update_global_colors') => {
	try {
		const response = await jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: key,
				nonce: nonce,
				data: value
			}
		});

		if (!response.success) {
			throw new Error(response.data || 'Update failed');
		}

		return response;
	} catch (error) {
		console.error('Ajax error:', error);
		throw error;
	}
};

export const getGlobalColors = () => {
    let data = new FormData();
    data.append("action", getGlobalStyleAction);
    data.append("nonce", nonce);

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
