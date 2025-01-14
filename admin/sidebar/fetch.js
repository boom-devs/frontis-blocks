const {nonce, ajaxUrl} = window.frontisBlocksAdminSidebar;

/**
 * Function for Update Global Colors
 * @param {*} data - The color data to update
 * @returns {object}
 */
export const updateGlobalColors = async (data) => {
	try {
		const response = await jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_update_global_colors',
				nonce: nonce,
				data: data
			}
		});

		if (!response || !response.success) {
			console.error('Update failed response:', response);
			throw new Error(response?.data || 'Update failed');
		}

		return response.data;
	} catch (error) {
		console.error('Update failed:', error);
		throw error;
	}
};

/**
 * Function to Get Global Colors
 * @returns {object}
 */
export const getGlobalColors = async () => {
	try {
		const response = await jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_get_global_colors',
				nonce: nonce
			}
		});

		if (!response.success) {
			throw new Error(response.data || 'Fetch failed');
		}

		return response.data;
	} catch (error) {
		console.error('Fetch failed:', error);
		throw error;
	}
};

/**
 * Function to Get Typography
 * @returns {object}
 */
export const getTypography = async () => {
	try {
		const response = await jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_get_typography',
				nonce: nonce
			}
		});

		if (!response.success) {
			throw new Error(response.data || 'Fetch failed');
		}

		return response.data;
	} catch (error) {
		console.error('Fetch failed:', error);
		throw error;
	}
};

/**
 * Function for Update Typography
 * @param {*} data - The typography data to update
 * @returns {object}
 */
export const updateTypography = async (data) => {
	try {
		const response = await jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_update_typography',
				nonce: nonce,
				data: data
			}
		});

		if (!response || !response.success) {
			console.error('Update failed response:', response);
			throw new Error(response?.data || 'Update failed');
		}

		return response.data;
	} catch (error) {
		console.error('Update failed:', error);
		throw error;
	}
};
