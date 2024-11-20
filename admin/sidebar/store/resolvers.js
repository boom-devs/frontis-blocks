import { getSettings } from '../api';
import { OptionKeys } from './constant';
import {
	setGlobalColors,
	setCustomColors,
	setGradientColors,
	setCustomGradientColors,
	setTypography,
	setError
} from './actions';

/**
 * Helper function to resolve settings and dispatch the appropriate action
 * @param {string} optionKey - The settings key to fetch
 * @param {Function} successAction - The action creator for success
 * @returns {Generator}
 */
function* resolveSettings(optionKey, successAction) {
	try {
		const data = yield getSettings(optionKey);
		return successAction(data);
	} catch (error) {
		return setError(error.message);
	}
}

/**
 * Get Global Colors Resolver
 */
export function* getGlobalColors() {
	return yield* resolveSettings(OptionKeys.GLOBAL_COLORS, setGlobalColors);
}

/**
 * Get Custom Colors Resolver
 */
export function* getCustomColors() {
	return yield* resolveSettings(OptionKeys.CUSTOM_COLORS, setCustomColors);
}

/**
 * Get Gradient Colors Resolver
 */
export function* getGradientColors() {
	return yield* resolveSettings(OptionKeys.GRADIENT_COLORS, setGradientColors);
}

/**
 * Get Custom Gradient Colors Resolver
 */
export function* getCustomGradientColors() {
	return yield* resolveSettings(OptionKeys.CUSTOM_GRADIENT_COLORS, setCustomGradientColors);
}

/**
 * Get Typography Resolver
 */
export function* getTypography() {
	return yield* resolveSettings(OptionKeys.TYPOGRAPHY, setTypography);
}
