import {OptionKeys} from "../store/constant";

export const updateSettings = async (settingType, data) => {
    try {
        const response = await jQuery.ajax({
            url: window.frontisBlocksAdminSidebar.ajaxUrl,
            type: 'POST',
            data: {
                action: `fb_update_${settingType}`,
                nonce: window.frontisBlocksAdminSidebar.nonce,
                data: data
            }
        });

        if (!response.success) {
            throw new Error(response.data || 'Update failed');
        }

        return response.data;
    } catch (error) {
        console.error('Ajax error:', error);
        throw error;
    }
};

export const getSettings = async (settingType) => {
	try {
		const response = await jQuery.ajax({
			url: window.frontisBlocksAdminSidebar.ajaxUrl,
			type: 'POST',
			data: {
				action: `fb_get_${settingType}`,
				nonce: window.frontisBlocksAdminSidebar.nonce
			}
		});

		if (!response.success) {
			throw new Error(response.data || 'Fetch failed');
		}
		console.log("Global getSettings")
		console.log(response.data)
		return response.data; // Ensure this returns the resolved data
	} catch (error) {
		console.error('Ajax error:', error);
		throw error;
	}
};
