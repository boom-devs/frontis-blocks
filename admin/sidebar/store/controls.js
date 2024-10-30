/**
 * Import Constants
 */
import { OptionKeys } from "./constant";

/**
 * Import Fetch Functions
 */
import { getSettings } from '../api';

/**
 * Helper function to validate JSON string
 * @param {string} str 
 * @returns {boolean}
 */
const isValidJson = (str) => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Helper function to safely parse response data
 * @param {Object} response 
 * @param {string} key 
 * @returns {Object|false}
 */
const parseResponse = (response, key) => {
    if (!response || typeof response !== 'object') {
        return false;
    }

    if (!response[key]) {
        return false;
    }

    if (typeof response[key] === 'object') {
        return response[key];
    }

    if (typeof response[key] === 'string' && isValidJson(response[key])) {
        return JSON.parse(response[key]);
    }

    return false;
};

/**
 * Fetch Global Colors from Database using AJAX
 */
export function* FETCH_GLOBAL_COLORS() {
    try {
        const response = yield getSettings(OptionKeys.GLOBAL_COLORS);
        return parseResponse(response, OptionKeys.GLOBAL_COLORS);
    } catch (error) {
        console.error('Error fetching global colors:', error);
        return false;
    }
}

/**
 * Fetch Custom Colors from Database using AJAX
 */
export function* FETCH_CUSTOM_COLORS() {
    try {
        const response = yield getSettings(OptionKeys.CUSTOM_COLORS);
        return parseResponse(response, OptionKeys.CUSTOM_COLORS);
    } catch (error) {
        console.error('Error fetching custom colors:', error);
        return false;
    }
}

/**
 * Fetch Gradient Colors from Database using AJAX
 */
export function* FETCH_GRADIENT_COLORS() {
    try {
        const response = yield getSettings(OptionKeys.GRADIENT_COLORS);
        return parseResponse(response, OptionKeys.GRADIENT_COLORS);
    } catch (error) {
        console.error('Error fetching gradient colors:', error);
        return false;
    }
}

/**
 * Fetch Custom Gradient Colors from Database using AJAX
 */
export function* FETCH_CUSTOM_GRADIENT_COLORS() {
    try {
        const response = yield getSettings(OptionKeys.CUSTOM_GRADIENT_COLORS);
        return parseResponse(response, OptionKeys.CUSTOM_GRADIENT_COLORS);
    } catch (error) {
        console.error('Error fetching custom gradient colors:', error);
        return false;
    }
}

/**
 * Fetch Typography Settings from Database using AJAX
 */
export function* FETCH_TYPOGRAPHY() {
    try {
        const response = yield getSettings(OptionKeys.TYPOGRAPHY);
        return parseResponse(response, OptionKeys.TYPOGRAPHY);
    } catch (error) {
        console.error('Error fetching typography:', error);
        return false;
    }
}
