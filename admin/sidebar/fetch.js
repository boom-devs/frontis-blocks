/**
 * Define AJAX Action names
 */
const updateGlobalStyleAction = 'fb_update_global_colors';
const getGlobalStyleAction = 'fb_get_global_colors';

const {nonce, ajaxUrl} = window.frontisBlocksAdminSidebar;


export const generateGlobalCss = async () => {
	try {
		const response =  await jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_generate_global_root_css',
				nonce: nonce,
			}
		});

		if (!response.success) {
			throw new Error(response.data || 'Update failed');
		}

		console.log("Data print inside fetch")
		console.log(response)

		return response;
	} catch (error) {
		return {
			"success": false,
			"data": "Update failed."
		};
	}
}

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
		return {
			"success": false,
			"data": "Update failed."
		};
	}
};

export const getGlobalStyle = async (key = getGlobalStyleAction) => {
	try {
		const response = await jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: key,
				nonce: nonce,
			}
		});

		if (!response.success) {
			throw new Error(response.data || 'Update failed');
		}

		return response;
	} catch (error) {
		return {
			"success": false,
			"data": "Colors not found."
		};
	}
}
