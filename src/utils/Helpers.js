export function getIdFromString( label ) {
	return label
		? label
				.toLowerCase()
				.replace( /[^a-zA-Z ]/g, '' )
				.replace( /\s+/g, '-' )
		: '';
}

export function getPanelIdFromRef( ref ) {
	if ( ref.current ) {
		const parentElement = ref.current.parentElement.closest( '.components-panel__body' );
		if ( parentElement && parentElement.querySelector( '.components-panel__body-title' ) ) {
			return getIdFromString( parentElement.querySelector( '.components-panel__body-title' ).textContent );
		}
	}
	return null;
}

const getFBEditorStateLocalStorage = ( key = false ) => {
	if ( ! window.localStorage ) {
		return null;
	}

	if ( ! key ) {
		return localStorage;
	}

	const uagLastOpenedSettingState = localStorage.getItem( key );

	if ( uagLastOpenedSettingState ) {
		return JSON.parse( uagLastOpenedSettingState );
	}

	return null;
};

export default getFBEditorStateLocalStorage;


/**
 * 
 * @param {Function} func function to be debounced.
 * @param {number} delay time in milliseconds.
 * @return {Function} - that will be debounced.
 */
export const debounce = ( func, delay ) => {
	let timeout;
	return ( ...args ) => {
		clearTimeout( timeout );
		timeout = setTimeout( () => {
			func( ...args );
		}, delay );
	};
};


/**
 * Check if current page is customizer page.
 * 
 * @return {boolean} - The result.
 */
export const isCustomizerPage = () => {
    // We need to run this script only on customizer page.
    if ( ! window.location.href.includes( '/customize.php' ) ) {
        return false;
    }

    if ( ! window?.wp?.customize ) {
        return false;
    }

    return true;
}