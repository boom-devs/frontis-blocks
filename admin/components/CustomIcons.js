import React from 'react';
import { __ } from '@wordpress/i18n';
import { store as coreDataStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { useEntityRecord } from '@wordpress/core-data';
import {useEffect, useState} from "@wordpress/element";
import {toast} from "react-toastify";

const CustomIcons = () => {

	const [options, setOptions] = useState({
		coming_soon_mode: false,
		maintenance_mode: false,
		coming_soon_page_id: '',
		maintenance_page_id: ''
	});

	const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

	useEffect(() => {
		fetchOptions();
	}, []);

	const fetchOptions = () => {
		const keys = Object.keys(options);
		jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_get_custom_icons',
				security: nonce,
				keys: keys,
			},
			success: function(response) {
				console.log(response)
				if (response.success) {
					// setOptions(prevOptions => ({ ...prevOptions, ...response.data }));
				} else {
					// toast.error(__(`Failed to fetch options: ${response.data?.message || 'Unknown error'}`, 'frontis-blocks'), {
					// 	position: "top-right",
					// 	autoClose: 5000,
					// 	hideProgressBar: false,
					// 	closeOnClick: true,
					// 	pauseOnHover: true,
					// 	draggable: true,
					// });
				}
			},
			error: function(xhr, status, error) {
				// toast.error(__(`Failed to fetch options: ${status} - ${error}`, 'frontis-blocks'), {
				// 	position: "top-right",
				// 	autoClose: 5000,
				// 	hideProgressBar: false,
				// 	closeOnClick: true,
				// 	pauseOnHover: true,
				// 	draggable: true,
				// });
			}
		});
	};


	return (
		<div>Hello world</div>
	)
}
export default CustomIcons;
