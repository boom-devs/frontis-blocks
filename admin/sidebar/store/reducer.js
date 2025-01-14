// store/reducer.js
const DEFAULT_STATE = {
	colors: [],
	shadeSteps: {},
};

export default function reducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case 'SET_COLORS':
			return {
				...state,
				colors: Array.isArray(action.colors) ? action.colors : [],
			};

		case 'SET_SHADE_STEP':
			return {
				...state,
				shadeSteps: {
					...state.shadeSteps,
					[action.slug]: action.step,
				},
			};

		default:
			return state;
	}
}
