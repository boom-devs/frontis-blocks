/**
 * Import Constants
 */
import { updateSettings } from '../sidebar/api';
import { ActionTypes, OptionKeys } from './constant';
import {
	dispatch
} from '@wordpress/data';

/**
 * Action: Fetch Is Saving
 * @returns
 */
export function setLoading(value) {
	if (value) {
		dispatch('core/editor').editPost({ meta: { _fb_meta_data: 1 } })
	}
	return {
		type: ActionTypes.SET_LOADING,
		payload: value,
	}
}

/**
 * Action: Set Error State
 */
export const setError = (error) => ({
	type: ActionTypes.SET_ERROR,
	payload: error,
});

/**
 * Helper Function for Setting and Saving Colors or Typography
 * @param {string} type - Action type to dispatch
 * @param {string} optionKey - Option key for the setting
 * @param shouldSave
 * @returns {Function}
 */
const createAsyncAction = (type, optionKey, shouldSave = false) => (value) => async ({dispatch}) => {
	try {
		dispatch(setLoading(true));

		if (shouldSave || value.length > 0) {
			await updateSettings(optionKey, value);
		}

		dispatch({
			type,
			payload: value,
		});

		// console.log(dispatched)
	} catch (error) {
		dispatch(setError(error.message));
	} finally {
		dispatch(setLoading(false));
	}
};

/**
 * Create Fetch Actions
 * @param {string} type - Action type
 * @returns {Function}
 */
const createFetchAction = (type) => () => ({
	type,
});

/**
 * Actions for Global Colors
 */
export const setGlobalColors = createAsyncAction(ActionTypes.SET_GLOBAL_COLORS, OptionKeys.GLOBAL_COLORS);
export const saveGlobalColors = createAsyncAction(ActionTypes.SAVE_GLOBAL_COLORS, OptionKeys.GLOBAL_COLORS, true);
export const fetchGlobalColors = createFetchAction(ActionTypes.FETCH_GLOBAL_COLORS);

/**
 * Actions for Custom Colors
 */
export const setCustomColors = createAsyncAction(ActionTypes.SET_CUSTOM_COLORS, OptionKeys.CUSTOM_COLORS);
export const saveCustomColors = createAsyncAction(ActionTypes.SAVE_CUSTOM_COLORS, OptionKeys.CUSTOM_COLORS, true);
export const fetchCustomColors = createFetchAction(ActionTypes.FETCH_CUSTOM_COLORS);

/**
 * Actions for Gradient Colors
 */
export const setGradientColors = createAsyncAction(ActionTypes.SET_GRADIENT_COLORS, OptionKeys.GRADIENT_COLORS);
export const saveGradientColors = createAsyncAction(ActionTypes.SAVE_GRADIENT_COLORS, OptionKeys.GRADIENT_COLORS, true);
export const fetchGradientColors = createFetchAction(ActionTypes.FETCH_GRADIENT_COLORS);

/**
 * Actions for Custom Gradient Colors
 */
export const setCustomGradientColors = createAsyncAction(ActionTypes.SET_CUSTOM_GRADIENT_COLORS, OptionKeys.CUSTOM_GRADIENT_COLORS);
export const saveCustomGradientColors = createAsyncAction(ActionTypes.SAVE_CUSTOM_GRADIENT_COLORS, OptionKeys.CUSTOM_GRADIENT_COLORS, true);
export const fetchCustomGradientColors = createFetchAction(ActionTypes.FETCH_CUSTOM_GRADIENT_COLORS);

/**
 * Actions for Typography
 */
export const setTypography = createAsyncAction(ActionTypes.SET_TYPOGRAPHY, OptionKeys.TYPOGRAPHY);
