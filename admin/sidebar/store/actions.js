/**
 * Import Constants
 */
import { ActionTypes, OptionKeys } from './constant';
import { updateSettings } from '../api';

/**
 * Action: Set Global Colors
 */
export const setGlobalColors = (value) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        await updateSettings(OptionKeys.GLOBAL_COLORS, value);
        dispatch({
            type: ActionTypes.SET_GLOBAL_COLORS,
            value,
        });
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

/**
 * Action: Save Global Color to Database
 */
export const saveGlobalColors = (value) => async (dispatch) => {
    try {
        if (Object.keys(value).length > 0) {
            await updateSettings(OptionKeys.GLOBAL_COLORS, value);
        }
        dispatch({
            type: ActionTypes.SAVE_GLOBAL_COLORS,
            value,
        });
    } catch (error) {
        dispatch(setError(error.message));
    }
};

/**
 * Action: Fetch Global Color from Database
 */
export const fetchGlobalColor = () => ({
    type: ActionTypes.FETCH_GLOBAL_COLORS,
});

/**
 * Action: Set Custom Colors
 */
export const setCustomColors = (value) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        await updateSettings(OptionKeys.CUSTOM_COLORS, value);
        dispatch({
            type: ActionTypes.SET_CUSTOM_COLORS,
            value,
        });
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

/**
 * Action: Save Custom Color to Database
 */
export const saveCustomColors = (value) => async (dispatch) => {
    try {
        await updateSettings(OptionKeys.CUSTOM_COLORS, value);
        dispatch({
            type: ActionTypes.SAVE_CUSTOM_COLORS,
            value,
        });
    } catch (error) {
        dispatch(setError(error.message));
    }
};

/**
 * Action: Fetch Custom Color from Database
 */
export const fetchCustomColor = () => ({
    type: ActionTypes.FETCH_CUSTOM_COLORS,
});

/**
 * Action: Set Gradient Colors
 */
export const setGradientColors = (value) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        await updateSettings(OptionKeys.GRADIENT_COLORS, value);
        dispatch({
            type: ActionTypes.SET_GRADIENT_COLORS,
            value,
        });
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

/**
 * Action: Save Gradient Color to Database
 */
export const saveGradientColors = (value) => async (dispatch) => {
    try {
        if (Object.keys(value).length > 0) {
            await updateSettings(OptionKeys.GRADIENT_COLORS, value);
        }
        dispatch({
            type: ActionTypes.SAVE_GRADIENT_COLORS,
            value,
        });
    } catch (error) {
        dispatch(setError(error.message));
    }
};

/**
 * Action: Fetch Gradient Color from Database
 */
export const fetchGradientColor = () => ({
    type: ActionTypes.FETCH_GRADIENT_COLORS,
});

/**
 * Action: Set Custom Gradient Colors
 */
export const setCustomGradientColors = (value) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        await updateSettings(OptionKeys.CUSTOM_GRADIENT_COLORS, value);
        dispatch({
            type: ActionTypes.SET_CUSTOM_GRADIENT_COLORS,
            value,
        });
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

/**
 * Action: Save Custom Gradient Color to Database
 */
export const saveCustomGradientColors = (value) => async (dispatch) => {
    try {
        await updateSettings(OptionKeys.CUSTOM_GRADIENT_COLORS, value);
        dispatch({
            type: ActionTypes.SAVE_CUSTOM_GRADIENT_COLORS,
            value,
        });
    } catch (error) {
        dispatch(setError(error.message));
    }
};

/**
 * Action: Fetch Custom Gradient Color from Database
 */
export const fetchCustomGradientColor = () => ({
    type: ActionTypes.FETCH_CUSTOM_GRADIENT_COLORS,
});

/**
 * Action: Set Typography
 */
export const setTypography = (value) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        await updateSettings(OptionKeys.TYPOGRAPHY, value);
        dispatch({
            type: ActionTypes.SET_TYPOGRAPHY,
            value,
        });
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

/**
 * Action: Set Loading State
 */
export const setLoading = (value) => ({
    type: ActionTypes.SET_LOADING,
    value
});

/**
 * Action: Set Error State
 */
export const setError = (error) => ({
    type: ActionTypes.SET_ERROR,
    payload: error
});
