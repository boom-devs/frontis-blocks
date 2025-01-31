// store/reducer.js
const DEFAULT_STATE = {
	colors: [],
	shadeSteps: {},
	typographies: {
		body: {},
		link: {},
		button: {},
		heading: {
			h1: {},
			h2: {},
			h3: {},
			h4: {},
			h5: {},
			h6: {}
		}
	},
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
				typographies: action.typographies || DEFAULT_STATE.typographies
			};

		default:
			return state;
	}
}
