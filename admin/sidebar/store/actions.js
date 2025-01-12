// store/actions.js
export const setItems = (items) => ({
	type: 'SET_ITEMS',
	items,
});

export const setLoading = (loading) => ({
	type: 'SET_LOADING',
	loading,
});
