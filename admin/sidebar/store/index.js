// store/index.js
import { createReduxStore, register } from '@wordpress/data';
import * as actions from './actions';
import * as selectors from './selectors';
import reducer from './reducer';

export const STORE_NAME = 'frontis-blocks/global-styles';

const store = createReduxStore(STORE_NAME, {
	reducer,
	actions,
	selectors,
});

register(store);

export default store;
