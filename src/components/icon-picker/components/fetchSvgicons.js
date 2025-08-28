const fetchSvgIcons = async () => {
	const { ajaxUrl, nonce, site_url } = window.FrontisBlocksData;

	// Assets er vitore fontawesome icon ache icons.php file a oita fetch korbo using rest api
	const url = `${site_url}/wp-json/wp/v2/frontis-blocks/icons`;
	const token = 'b9e9d7516943744aed44d0be39217694a92784ce737e07c9e12397eca99fded0';

	// Function to check if data exists in localStorage
	const getDataFromLocalStorage = () => {
		let data = localStorage.getItem('iconData');
		data = data ? JSON.parse(data) : null;
		return data;
	};

	// Fetch SVG icons from the API
	const fetchFromApi = async () => {
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();
			localStorage.setItem('iconData', JSON.stringify(data)); // Store data in localStorage
			return data;
		} catch (error) {
			console.error('Error fetching SVG icons:', error);
			return null;
		}
	};

	// Get data from localStorage or fetch from API
	let data = getDataFromLocalStorage();
	if (data === null) {
		data = await fetchFromApi();
	}

	return data; // Return the fetched or retrieved data
};

export default fetchSvgIcons;
