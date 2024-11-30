import { useBlockProps } from '@wordpress/block-editor';
import { useRef, useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export const getGlobalSettings = (select) => {
	return {
		getGlobalColors: select('frontis-blocks').getGlobalColors()
		// getCustomColors: select('frontis-blocks').getCustomColors(),
		// getGradientColors: select('frontis-blocks').getGradientColors(),
		// getCustomGradientColors: select('frontis-blocks').getCustomGradientColors(),
		// getGlobalTypography: select('frontis-blocks').getGlobalTypography()
	}
}

/**
 * Save localstorage
 */
export const setFbLocalStorage = (key, value) => {
	const data = JSON.stringify(value)
	localStorage.setItem(key, data);
}

/**
 * Get localstorage data
 */
export const getFbLocalStorage = (key) => {
	const getJson = localStorage.getItem(key);
	return JSON.parse(getJson) ? JSON.parse(getJson) : [];
}

/**
 * Returns `true` if the post is done saving, `false` otherwise.
 *
 * @returns {Boolean}
 */
export const useAfterSave = () => {
	const [ isPostSaved, setIsPostSaved ] = useState( false );
	const isPostSavingInProgress = useRef( false );
	const { isSavingPost, isAutosavingPost } = useSelect( ( __select ) => {
		return {
			isSavingPost: __select( 'core/editor' ).isSavingPost(),
			isAutosavingPost: __select( 'core/editor' ).isAutosavingPost(),
		}
	} );

	useEffect( () => {
		if ( ( isSavingPost || isAutosavingPost ) && ! isPostSavingInProgress.current ) {
			setIsPostSaved( false );
			isPostSavingInProgress.current = true;
		}
		if ( ! ( isSavingPost || isAutosavingPost ) && isPostSavingInProgress.current ) {
			// Code to run after post is done saving.
			setIsPostSaved( true );
			isPostSavingInProgress.current = false;
		}
	}, [ isSavingPost, isAutosavingPost ] );

	return isPostSaved;
};
