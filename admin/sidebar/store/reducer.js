// store/reducer.js
const DEFAULT_STATE = {
	colors: [],
	shadeSteps: {},
	typographies: [],
	loading: false
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

		case 'SET_TYPOGRAPHIES':
			return {
				...state,
				typographies: Array.isArray(action.typographies) ? action.typographies : [],
			};

		default:
			return state;
	}
}
