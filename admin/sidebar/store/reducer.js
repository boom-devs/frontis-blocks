// store/reducer.js
const DEFAULT_STATE = {
	items: [],
	loading: false,
};

export default function reducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case 'SET_ITEMS':
			return {
				...state,
				items: action.items,
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: action.loading,
			};
		default:
			return state;
	}
}
