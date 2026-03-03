/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
import {
	Modal,
	TabPanel
} from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { useContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import InstalledFonts from './installed-fonts';
import FontCollection from './font-collection';
import UploadFonts from './upload-fonts';
import { FontLibraryContext } from './context';

const DEFAULT_TAB = {
	name: 'installed-fonts',
	title: _x( 'Library', 'Font library' ),
	className: 'installed-fonts-tab',
};

const UPLOAD_TAB = {
	name: 'upload-fonts',
	title: _x( 'Upload', 'noun' ),
	className: 'upload-fonts-tab',
};

const tabsFromCollections = ( collections ) =>
	collections.map( ( { slug, name } ) => ( {
		name: slug,
		title:
			collections.length === 1 && slug === 'google-fonts'
				? __( 'Install Fonts' )
				: name,
		className: `${ slug }-tab`,
	} ) );

function FontLibraryModal( {
	onRequestClose,
	defaultTabId = 'installed-fonts',
} ) {
	const { collections } = useContext( FontLibraryContext );
	const canUserCreate = useSelect( ( select ) => {
		return select( coreStore ).canUser( 'create', {
			kind: 'postType',
			name: 'wp_font_family',
		} );
	}, [] );

	const tabs = [ DEFAULT_TAB ];

	if ( canUserCreate ) {
		tabs.push( UPLOAD_TAB );
		tabs.push( ...tabsFromCollections( collections || [] ) );
	}

	const onSelect = ( tabName ) => {
		// Optional: Handle tab selection if needed
	};

	return (
		<Modal
			title={ __( 'Fonts' ) }
			onRequestClose={ onRequestClose }
			isFullScreen
			className="font-library-modal"
		>
			<TabPanel
				className="font-library-modal__tabpanel"
				activeClass="active-tab"
				onSelect={ onSelect }
				tabs={ tabs }
			>
				{ ( tab ) => {
					switch ( tab.name ) {
						case 'upload-fonts':
							return <UploadFonts />;
						case 'installed-fonts':
							return <InstalledFonts />;
						default:
							return <FontCollection slug={ tab.name } />;
					}
				} }
			</TabPanel>
		</Modal>
	);
}

export default FontLibraryModal;