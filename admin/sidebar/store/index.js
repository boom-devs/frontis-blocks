/**
 * WordPress dependencies
 */
import {
    createReduxStore,
    register,
    subscribe
} from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as actions from "./actions";
import { DEFAULT_STATE, STORE_KEY } from './constant';
import * as controls from "./controls";
import reducer from "./reducer";
import * as resolvers from "./resolvers";
import * as selectors from "./selectors";

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
let isHandlingSave = false; // Flag to prevent recursive calls

subscribe(() => {
    // const isSavingPost = select('core/editor').isSavingPost();
    // const isAutosavingPost = select('core/editor').isAutosavingPost();
    // const isLoading = select(STORE_KEY).getIsLoading();

    // // Skip if already handling, autosaving, not saving, or loading
    // if (isLoading || isAutosavingPost || !isSavingPost || isHandlingSave) {
    //     return;
    // }

    // isHandlingSave = true; // Set the flag to prevent re-entrant calls

    // const storeDispatch = dispatch(STORE_KEY);
    // const storeSelect = select(STORE_KEY);

    // try {
    //     // Set loading state
    //     storeDispatch.setLoading(true);

    //     // Save all colors
    //     const globalColors = storeSelect.getGlobalColors();
    //     if (globalColors?.length) {
    //         storeDispatch.saveGlobalColors(globalColors);
    //     }

    //     const customColors = storeSelect.getCustomColors();
    //     if (customColors?.length) {
    //         storeDispatch.saveCustomColors(customColors);
    //     }

    //     const gradientColors = storeSelect.getGradientColors();
    //     if (gradientColors?.length) {
    //         storeDispatch.saveGradientColors(gradientColors);
    //     }

    //     const customGradientColors = storeSelect.getCustomGradientColors();
    //     if (customGradientColors?.length) {
    //         storeDispatch.saveCustomGradientColors(customGradientColors);
    //     }

    //     // Save typography
    //     const typography = storeSelect.getTypography();
    //     console.log("typography color")
    //     console.log(typography)
    //     if (Object.keys(typography).length) {
    //         storeDispatch.setTypography(typography);
    //     }

    // } catch (error) {
    //     console.error('Error saving settings:', error);
    //     storeDispatch.setError(error.message);
    // } finally {
    //     // Reset the flag and loading state
    //     isHandlingSave = false;
    //     storeDispatch.setLoading(false);
    // }
});

export default store;
