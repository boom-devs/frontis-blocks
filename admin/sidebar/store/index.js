// store/index.js
import { createReduxStore, register } from '@wordpress/data';

// Separate files for actions, selectors, and reducer
import * as actions from './actions';
import * as selectors from './selectors';
import reducer from './reducer';

const store = createReduxStore('my-custom-store', {
	reducer,
	actions,
	selectors,
});

register(store);

export default store;
