/**
 * WordPress dependencies
 */
import {
    createReduxStore,
    register,
    select,
    subscribe,
    dispatch
} from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as actions from "./actions";
import * as selectors from "./selectors";
import * as controls from "./controls";
import * as resolvers from "./resolvers";
import reducer from "./reducer";
import { STORE_KEY, DEFAULT_STATE } from './constant';

/**
 * Create WP Redux Store
 */
const storeConfig = {
    reducer,
    actions,
    selectors,
    controls,
    resolvers,
    initialState: DEFAULT_STATE
};

/**
 * Register the store
 */
export const store = createReduxStore(STORE_KEY, storeConfig);
register(store);

/**
 * Save Global Values on Save Page/Post
 */
subscribe(() => {
    const isSavingPost = select('core/editor').isSavingPost();
    const isAutosavingPost = select('core/editor').isAutosavingPost();
    const isLoading = select(STORE_KEY).getIsLoading();

    if (isLoading || isAutosavingPost || !isSavingPost) {
        return;
    }

    const storeDispatch = dispatch(STORE_KEY);
    const storeSelect = select(STORE_KEY);

    try {
        // Set loading state
        storeDispatch.setLoading(true);

        // Save all colors
        const globalColors = storeSelect.getGlobalColors();
        if (globalColors?.length) {
            storeDispatch.saveGlobalColors(globalColors);
        }

        const customColors = storeSelect.getCustomColors();
        if (customColors?.length) {
            storeDispatch.saveCustomColors(customColors);
        }

        const gradientColors = storeSelect.getGradientColors();
        if (gradientColors?.length) {
            storeDispatch.saveGradientColors(gradientColors);
        }

        const customGradientColors = storeSelect.getCustomGradientColors();
        if (customGradientColors?.length) {
            storeDispatch.saveCustomGradientColors(customGradientColors);
        }

        // Save typography
        const typography = storeSelect.getTypography();
        if (Object.keys(typography).length) {
            storeDispatch.setTypography(typography);
        }

    } catch (error) {
        console.error('Error saving settings:', error);
        storeDispatch.setError(error.message);
    } finally {
        storeDispatch.setLoading(false);
    }
});

export default store;
