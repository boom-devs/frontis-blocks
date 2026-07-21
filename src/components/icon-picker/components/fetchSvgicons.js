const fetchSvgIcons = async () => {
	const siteUrl = window.FrontisBlocksData?.site_url || (typeof window !== 'undefined' ? window.location.origin : '');
	const url = `${siteUrl}/wp-json/wp/v2/frontis-blocks/icons`;

	// Function to check if data exists in localStorage
	const getDataFromLocalStorage = () => {
		try {
			let data = localStorage.getItem('iconData');
			return data ? JSON.parse(data) : null;
		} catch (e) {
			return null;
		}
	};

	// Fetch SVG icons from the API
	const fetchFromApi = async () => {
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();
			try {
				localStorage.setItem('iconData', JSON.stringify(data));
			} catch (e) {
				console.error('Error saving iconData to localStorage:', e);
			}
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
