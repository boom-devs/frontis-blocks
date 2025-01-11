/**
 * Define AJAX Action names
 */
const UPDATE_GLOBAL_STYLE = 'fb_update_global_colors';
const GET_GLOBAL_STYLE = 'fb_get_global_colors';

const {nonce, ajaxUrl} = window.frontisBlocksAdminSidebar;

/**
 * Function for Update Global Settings
 * @param {*} data - The data to update
 * @param {string} path - The API path (not used, kept for compatibility)
 * @returns {object}
 */
export const updateGlobalStyle = async (data, path) => {
	try {
		console.log('Updating global style with data:', data); // Debug log

		const response = await jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: UPDATE_GLOBAL_STYLE,
				nonce: nonce,
				data: JSON.stringify(data) // Ensure data is properly stringified
			}
		});

		console.log('Server response:', response); // Debug log

		if (!response.success) {
			console.error('Server returned error:', response.data); // Debug log
			throw new Error(response.data || 'Update failed');
		}

		return response;
	} catch (error) {
		console.error('Update failed:', error);
		console.error('Full error details:', {
			message: error.message,
			stack: error.stack,
			response: error.responseText
		});
		return {
			success: false,
			data: error.message || "Update failed."
		};
	}
};

/**
 * Function to Get Global Settings
 * @param {string} path - The API path (not used, kept for compatibility)
 * @returns {object}
 */
export const getGlobalStyle = async (path) => {
	try {
		console.log('Fetching global styles'); // Debug log

		const response = await jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: GET_GLOBAL_STYLE,
				nonce: nonce
			}
		});

		console.log('Server response:', response); // Debug log

		if (!response.success) {
			console.error('Server returned error:', response.data); // Debug log
			throw new Error(response.data || 'Fetch failed');
		}

		return response;
	} catch (error) {
		console.error('Fetch failed:', error);
		console.error('Full error details:', {
			message: error.message,
			stack: error.stack,
			response: error.responseText
		});
		return {
			success: false,
			data: error.message || "Data not found."
		};
	}
};
