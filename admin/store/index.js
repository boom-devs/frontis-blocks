/**
 * Store Setup
 */
import {
	createReduxStore,
	register,
	select,
	subscribe,
	dispatch
} from '@wordpress/data';

import * as actions from "./actions"
import * as selectors from "./selectors"
import * as controls from "./controls"
import * as resolvers from "./resolvers"
import { OptionKeys } from "./constant"
import reducer from "./reducer"
import {getGlobalSettings} from "../sidebar/helper";

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

export default store;
