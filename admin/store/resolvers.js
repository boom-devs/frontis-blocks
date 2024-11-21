import { getSettings } from '../sidebar/api';
import { ActionTypes, OptionKeys } from './constant';
import {
	setGlobalColors,
	setCustomColors,
	setGradientColors,
	setCustomGradientColors,
	setTypography,
	setError
} from './actions';

/**
 * Get Global Colors Resolver
 */
export function* getGlobalColors() {
	try {
		const colors = yield getSettings(OptionKeys.GLOBAL_COLORS);
		return setGlobalColors(colors);
	} catch (error) {
		return setError(error.message);
	}
}

/**
 * Get Custom Colors Resolver
 */
export function* getCustomColors() {
	try {
		const colors = yield getSettings(OptionKeys.CUSTOM_COLORS);
		return setCustomColors(colors);
	} catch (error) {
		return setError(error.message);
	}
}

/**
 * Get Gradient Colors Resolver
 */
export function* getGradientColors() {
	try {
		const colors = yield getSettings(OptionKeys.GRADIENT_COLORS);
		return setGradientColors(colors);
	} catch (error) {
		return setError(error.message);
	}
}

/**
 * Get Custom Gradient Colors Resolver
 */
export function* getCustomGradientColors() {
	try {
		const colors = yield getSettings(OptionKeys.CUSTOM_GRADIENT_COLORS);
		return setCustomGradientColors(colors);
	} catch (error) {
		return setError(error.message);
	}
}

/**
 * Get Typography Resolver
 */
export function* getTypography() {
	try {
		const typography = yield getSettings(OptionKeys.TYPOGRAPHY);
		return setTypography(typography);
	} catch (error) {
		return setError(error.message);
	}
}
