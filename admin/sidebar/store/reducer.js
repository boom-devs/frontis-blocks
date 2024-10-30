import { ActionTypes, DEFAULT_STATE } from './constant';

export default function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        // Global Colors
        case ActionTypes.SET_GLOBAL_COLORS:
        case ActionTypes.SAVE_GLOBAL_COLORS:
            return {
                ...state,
                globalColors: [...action.value]
            };
        case ActionTypes.FETCH_GLOBAL_COLORS:
            return state;

        // Custom Colors
        case ActionTypes.SET_CUSTOM_COLORS:
        case ActionTypes.SAVE_CUSTOM_COLORS:
            return {
                ...state,
                customColors: [...action.value]
            };
        case ActionTypes.FETCH_CUSTOM_COLORS:
            return state;

        // Gradient Colors
        case ActionTypes.SET_GRADIENT_COLORS:
        case ActionTypes.SAVE_GRADIENT_COLORS:
            return {
                ...state,
                gradientColors: [...action.value]
            };
        case ActionTypes.FETCH_GRADIENT_COLORS:
            return state;

        // Custom Gradient Colors
        case ActionTypes.SET_CUSTOM_GRADIENT_COLORS:
        case ActionTypes.SAVE_CUSTOM_GRADIENT_COLORS:
            return {
                ...state,
                customGradientColors: [...action.value]
            };
        case ActionTypes.FETCH_CUSTOM_GRADIENT_COLORS:
            return state;

        // Typography
        case ActionTypes.SET_TYPOGRAPHY:
            return {
                ...state,
                globalTypography: {
                    ...state.globalTypography,
                    [action.value.type]: action.value
                }
            };

        // Loading State
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.value
            };

        // Error State
        case ActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}
