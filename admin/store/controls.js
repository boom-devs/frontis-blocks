/**
 * Import Constants
 */
import { OptionKeys } from "./constant";

/**
 * Import Fetch Functions
 */
import { getSettings } from '../sidebar/api';

/**
 * Helper function to validate JSON string
 * @param {string} str
 * @returns {boolean}
 */
const isValidJson = (str) => {
	try {
		JSON.parse(str);
		return true;
	} catch {
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
	if (response && typeof response === 'object' && response[key]) {
		const value = response[key];

		if (typeof value === 'object') {
			return value;
		}

		if (typeof value === 'string' && isValidJson(value)) {
			return JSON.parse(value);
		}
	}

	return false;
};

/**
 * Generic function to fetch settings from the database
 * @param {string} key
 * @returns {Object|false}
 */
function* fetchSettings(key) {
	try {
		const response = yield getSettings(key);
		return parseResponse(response, key);
	} catch (error) {
		console.error(`Error fetching settings for key "${key}":`, error);
		return false;
	}
}

/**
 * Fetch Global Colors from Database using AJAX
 */
export function* FETCH_GLOBAL_COLORS() {
	return yield* fetchSettings(OptionKeys.GLOBAL_COLORS);
}

/**
 * Fetch Custom Colors from Database using AJAX
 */
export function* FETCH_CUSTOM_COLORS() {
	return yield* fetchSettings(OptionKeys.CUSTOM_COLORS);
}

/**
 * Fetch Gradient Colors from Database using AJAX
 */
export function* FETCH_GRADIENT_COLORS() {
	return yield* fetchSettings(OptionKeys.GRADIENT_COLORS);
}

/**
 * Fetch Custom Gradient Colors from Database using AJAX
 */
export function* FETCH_CUSTOM_GRADIENT_COLORS() {
	return yield* fetchSettings(OptionKeys.CUSTOM_GRADIENT_COLORS);
}

/**
 * Fetch Typography Settings from Database using AJAX
 */
export function* FETCH_TYPOGRAPHY() {
	return yield* fetchSettings(OptionKeys.TYPOGRAPHY);
}
