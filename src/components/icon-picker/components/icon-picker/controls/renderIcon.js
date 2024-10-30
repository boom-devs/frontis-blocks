/**
 * Set inline CSS class.
 *
 * @param {Object} props - The block object.
 * @return {Array} The inline CSS class.
 */

import parseSVG from './parseIcon';
const { ajaxUrl, nonce } = window.FrontisBlocksData;
const url = 'https://svg-icons.boomdevs.com/';
const token = 'b9e9d7516943744aed44d0be39217694a92784ce737e07c9e12397eca99fded0';

// Function to check if data exists in localStorage
const mergeOldNewArray = (data, iconCustomData) => {
	const chunkSize = 8; // Maximum items per sub-array
	const customIconArray = [];

	for (let i = 0; i < iconCustomData.length; i += chunkSize) {
		customIconArray.push(iconCustomData.slice(i, i + chunkSize));
	}

	data = data ? JSON.parse(data) : [];

	return data.concat(customIconArray);
}

// Function to check if data exists in localStorage
const getDataFromLocalStorage = () => {
	let data = localStorage.getItem('iconData');
	let iconCustomData = localStorage.getItem('iconCustomData');
	iconCustomData = iconCustomData ? JSON.parse(iconCustomData) : [];

	const chunkSize = 8; // Maximum items per sub-array
	const customIconArray = [];

	for (let i = 0; i < iconCustomData.length; i += chunkSize) {
		customIconArray.push(iconCustomData.slice(i, i + chunkSize));
	}

	data = data ? JSON.parse(data) : [];

	return mergeOldNewArray(data, iconCustomData);
};

// Fetch SVG icons from the API
const fetchFromApi = () => {
	return fetch(url, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			localStorage.setItem('iconData', JSON.stringify(data)); // Store data in localStorage
			return data;
		})
		.catch(error => {
			console.error('Error fetching SVG icons:', error);
			return null;
		});
};

const fetchCustomIcons = () => {
	try {
		const response = jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_get_custom_icons_category',
				security: nonce
			}
		});
		if(response.data) {
			localStorage.setItem('iconCustomData', JSON.stringify(response.data.icons));
			return response.data.icons;
		}
	} catch (error) {
		console.error('Error fetching custom icons:', error);
	}
}

// Get data from localStorage or fetch from API
function renderSVG( svg, setAttributes = false, extraProps = {} ) {
	svg = parseSVG( svg );

	let data = getDataFromLocalStorage();
	if (!data) {
		fetchFromApi().then(fetchedData => {
			data = fetchedData;
			// console.log(data); // Log or use the fetched data
		});
	}

	const svgIcon = data;

	if(!svgIcon) {
		return;
	}

	let fontAwesome;
	fontAwesome = svgIcon[ svg ];

	if ( ! fontAwesome ) {
		return null;
	}

	const fontAwesomeSvg = fontAwesome.svg?.brands ? fontAwesome.svg.brands : fontAwesome.svg.solid;

	const viewBox = `0 0 ${fontAwesomeSvg.width} ${fontAwesomeSvg.height}`;
	const path = fontAwesomeSvg.path;

	let align = null;

	switch ( svg ) {
		case 'align-center':
			align = { fillRule:'evenodd', clipRule:'evenodd', d : 'M4 2H14V0H4V2ZM0 7H18V5H0V7ZM4 12H14V10H4V12Z' };
			break;
		case 'align-left':
			align = { fillRule:'evenodd', clipRule:'evenodd', d : 'M10 2H0V0H10V2ZM18 7H0V5H18V7ZM10 12H0V10H10V12Z' };
			break;
		case 'align-right':
			align = { fillRule:'evenodd', clipRule:'evenodd', d : 'M8 2H18V0H8V2ZM0 7H18V5H0V7ZM8 12H18V10H8V12Z' };
			break;
		case 'align-justify':
			align = { d : 'M0 0H18V2H0V0ZM0 5.00001H18V7.00001H0V5.00001ZM0 10H18V12H0V10Z' };
			break;
	}

	if ( align ) {
		return <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
			<path { ...align } />
		</svg>
	}

	return ! setAttributes || 'not_set' === setAttributes ? (
		<svg xmlns="https://www.w3.org/2000/svg" viewBox={ viewBox } {...extraProps}>
			<path d={ path }></path>
		</svg>
	) : (
		<svg width="20" height="20" xmlns="https://www.w3.org/2000/svg" viewBox={ viewBox } {...extraProps}>
			<path d={ path }></path>
		</svg>
	);
}

export default renderSVG;
