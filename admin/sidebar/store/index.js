/**
 * Store Setup
 */
import {
    createReduxStore,
    register,
    select,
    subscribe,
    dispatch,
    combineReducers
} from '@wordpress/data';

import * as actions from "./actions"
import * as selectors from "./selectors"
import * as controls from "./controls"
import * as resolvers from "./resolvers"
import reducer from "./reducer"

/**
 * Create WP Redux Store
 */
const store = createReduxStore(
    'frontis-blocks',
    {
        reducer,
        actions,
        selectors,
        controls,
        resolvers
    }
);

register(store);

/**
 * Save Global Values on Save Page/Post
 */

subscribe(() => {
    const isSavingPost = select('core/editor').isSavingPost();
    const isAutosavingPost = select('core/editor').isAutosavingPost();

    const fbIsSaving = select('frontis-blocks').getIsSaving()

    if (!fbIsSaving || isAutosavingPost || !isSavingPost) {
        return;
    }

    /**
     * Action
     */
    //Global Colors
    const globalColors = select('frontis-blocks').getGlobalColors()
    dispatch('frontis-blocks').saveGlobalColors(globalColors)

    //Custom Colors
    const customColors = select('frontis-blocks').getCustomColors()
    dispatch('frontis-blocks').saveCustomColors(customColors)

    //Gradient Colors
    const gradientColors = select('frontis-blocks').getGradientColors()
    dispatch('frontis-blocks').saveGradientColors(gradientColors)

    //Custom Gradient Colors
    const gradientCustomColors = select('frontis-blocks').getCustomGradientColors()
    dispatch('frontis-blocks').saveCustomGradientColors(gradientCustomColors)

    dispatch('frontis-blocks').setIsSaving(false)
});
